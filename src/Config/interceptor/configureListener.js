import axios from "axios"

export const listener = store => {
  const chave_acesso = selecionarChaveAcesso(store.getState())
  if (chave_acesso) {
    axios.defaults.headers.common["access_token"] = chave_acesso
    axios.defaults.headers.common["client_id"] = SENSEDIA_CLIENT_ID
  }
}

const configureListener = store => {
  store.subscribe(() => listener(store))
}

export default configureListener
