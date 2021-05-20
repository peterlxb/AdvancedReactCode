import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provide extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Peter liu",
        email: "peter@163.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Zhang",
        email: "karen@163.com",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Kone Joe",
        email: "kone@163.com",
        phone: "666-666-6666"
      },
      {
        id: 4,
        name: "Jason Tatum",
        email: "jason@163.com",
        phone: "888-888-8888"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
