import React, { Component } from "react";
import { Router } from "react-router-dom";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
