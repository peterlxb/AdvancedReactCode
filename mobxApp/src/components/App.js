import React, { Component } from "react";
import Counter from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MobX</h1>
        <Counter state={this.props.state} />
      </div>
    );
  }
}

export default App;
