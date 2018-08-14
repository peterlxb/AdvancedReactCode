import React, { Component } from "react";
import Loadable from "react-loadable";
import MyTable from "./Table";
import lazy from "./lazy";

const LoadableComponent = Loadable({
  loader: () => import("./Dashboard"),
  loading: lazy
});

class App extends Component {
  render() {
    return <MyTable />;
  }
}
export default App;
