import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import reducers from "reducers";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
