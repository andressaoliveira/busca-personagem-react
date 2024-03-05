import moment from "moment";

import PersonagensService from "../Services/PersonagensService";

const personagensService = new PersonagensService();

export const DUCK_NAME = "personagens";

export const INITIAL_STATE = {
  lastUpdateDateTime: null,
  loading: false,
  success: false,
  error: null,
  data: []
};

export const LISTAR_PERSONAGENS_INICIADO = `${DUCK_NAME}/LISTAR_PERSONAGENS_INICIADO`;
export const LISTAR_PERSONAGENS_SUCESSO = `${DUCK_NAME}/LISTAR_PERSONAGENS_SUCESSO`;
export const LISTAR_PERSONAGENS_ERRO = `${DUCK_NAME}/LISTAR_PERSONAGENS_ERRO`;

export const listarPersonagensIniciado = () => ({
  type: LISTAR_PERSONAGENS_INICIADO
});
export const listarPersonagensSucesso = data => ({
  type: LISTAR_PERSONAGENS_SUCESSO,
  data
});
export const listarPersonagensErro = error => ({
  type: LISTAR_PERSONAGENS_ERRO,
  error
});

export const listarPersonagens = () => async dispatch => {
  dispatch(listarPersonagensIniciado());
  try {
    const data = await personagensService.listarPersonagens();
    dispatch(listarPersonagensSucesso(data));
  } catch (error) {
    dispatch(listarPersonagensErro(error));
  }
};

const reducer = (state = INITIAL_STATE, action = { type: null }) => {
  switch (action.type) {
  case LISTAR_PERSONAGENS_INICIADO:
    return {
      ...state,
      loading: true,
      error: null,
      success: false,
      data: []
    };
  case LISTAR_PERSONAGENS_SUCESSO:
    return {
      ...state,
      lastUpdateDateTime: moment().toISOString(),
      loading: false,
      success: true,
      error: null,
      data: [...action.data]
    };
  case LISTAR_PERSONAGENS_ERRO:
    return {
      ...state,
      loading: false,
      success: false,
      error: action.error,
      data: []
    };
  default:
    return state;
  }
};

export default reducer;
