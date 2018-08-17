import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Header from "./layout/Header";
import Contacts from "./features/Contacts/Contacts";
import AddContact from "./features/AddContact/AddContact";
//import AddContact from "./features/AddContact/AddContact-ref";

import { Provide } from "./Context";

//import "./App.css";

class App extends Component {
  render() {
    return (
      <Provide>
        <div className="App">
          <AddContact />
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provide>
    );
  }
}

export default App;
