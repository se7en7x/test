/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {  fetchLoctions,selectLocation  } from "./actions";//for test


import App from "./App";
// import store from "./store";
import configureStore from "./configureStore";
const store = configureStore();
store.dispatch(selectLocation(2471217,"New York"));//test2
// By using <Provider />, the store will be made available for all the components in your application.

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);