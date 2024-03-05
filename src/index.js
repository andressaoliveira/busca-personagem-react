import React from "react";
import ReactDOM from "react-dom";
import "moment/locale/pt-br";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "./Config/Store";

import App from "./App/index";

import "./index.scss";

const { persistor, store } = configureStore();

const moment = require("moment");

moment.locale('pt-br')

const render = (target) => {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={<div>loading...</div>} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>,
        target
    );
};

render(document.getElementById("root"), "pt-br");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


