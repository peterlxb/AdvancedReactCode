import React, { Component } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

class App extends Component {
  render() {
    const store = this.props.store;

    return (
      <div className="App">
        <h1>MobX</h1>
        <TodoList store={store} />
        <AddTodo />
      </div>
    );
  }
}

export default App;
