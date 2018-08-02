/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {  fetchLoctions  } from './actions'

import App from "./App";
// import store from "./store";
import configureStore from "./configureStore"
const store = configureStore();
store.dispatch(fetchLoctions("phi"))
// By using <Provider />, the store will be made available for all the components in your application.

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);