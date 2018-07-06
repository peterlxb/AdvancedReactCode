import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    const store = this.props.store;

    return (
      <div className="App">
        <h1>MobX</h1>
        <TodoList store={store} />
      </div>
    );
  }
}

export default App;
