import { combineReducers } from "redux";

import personagens, { DUCK_NAME as LISTAR_PERSONAGENS } from "./PersonagensDuck";

const reducers = {
  [LISTAR_PERSONAGENS]: personagens,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
