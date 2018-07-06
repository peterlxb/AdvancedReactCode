import React, { Component } from "react";
import { observer } from "mobx-react";
import { autorun, observable } from "mobx";

export default class TodoList extends Component {
  render() {
    const store = this.props.store;
    console.log(store.todos);
    console.log(store);
    return (
      <div>
        <h1>TodoList</h1>
      </div>
    );
  }
}
