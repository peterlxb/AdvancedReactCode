import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducers from "reducers";

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};