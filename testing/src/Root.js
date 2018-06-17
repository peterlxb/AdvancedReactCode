import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import reducers from "reducers";

// const initialState = {};

// const store = createStore(
//   reducers,
//   initialState,
//   compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&        window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
};
