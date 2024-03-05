import axios from "axios"

import configureListener from "./configureListener"
import { autenticarSensedia } from "Ducks/Usuario/SensediaDuck"
import { SENSEDIA_CLIENT_ID } from "Helpers/ApiHelper"
import AzureADService from "Services/AzureADService"

const azureADService = new AzureADService()

let requisitandoNovoToken = false
let subscribers = []

function aoReceberNovoTokenDeAcesso(headers) {
  subscribers = subscribers.filter(callback => callback(headers))
}

function adicionarSubscriber(callback) {
  subscribers.push(callback)
}

const interceptor = {
  createInterceptor: store =>
    axios.interceptors.response.use(
      response => response,
      responseError => {
        const { config, response: { status } } = responseError
        const requisicaoOriginal = config
        if (!responseError.response) {
          return Promise.reject(responseError)
        }

        const { data: { unique_name } } = store.getState().tokenAD
        const tokenAzureAD = azureADService.pegarToken()

        if (status === 401) {
          if (!requisitandoNovoToken) {
            requisitandoNovoToken = true
            store.dispatch(autenticarSensedia(unique_name, tokenAzureAD)).then(() => {
              requisitandoNovoToken = false
              const {
                tokenSensedia: {
                  data: { access_token }
                }
              } = store.getState()
              const headers = {
                Accept: "application/json, text/plain, */*",
                access_token: access_token,
                client_id: SENSEDIA_CLIENT_ID
              }
              if (access_token) aoReceberNovoTokenDeAcesso(headers)
            })
          }
          const reEnviarRequisicaoOriginal = new Promise(resolve => {
            adicionarSubscriber(headers => {
              requisicaoOriginal.headers = { ...headers }
              resolve(axios(requisicaoOriginal))
            })
          })
          return reEnviarRequisicaoOriginal
        }
        return Promise.reject(responseError)
      }
    ),
  configureListener: store => configureListener(store)
}

export default interceptor
