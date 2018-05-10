import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
window.store = store
console.log("state in store", store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);