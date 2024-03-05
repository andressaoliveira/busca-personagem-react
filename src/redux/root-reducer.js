import { combineReducers } from "redux";

import personagensReducer from "./personagens/slice";

const rootReducer = combineReducers({ personagensReducer });

export default rootReducer;