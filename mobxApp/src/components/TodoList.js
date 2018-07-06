import React, { Component } from "react";
import { observer } from "mobx-react";

const Counter = observer(
  class Counter extends Component {
    render() {
      return (
        <div>
          {this.props.state.value}
          <div>
            <button type="button" onClick={this.props.state.inc}>
              increment
            </button>
            <button type="button" onClick={this.props.state.dec}>
              decrement
            </button>
          </div>
        </div>
      );
    }
  }
);

export default Counter;
