import React, { Component } from "react";

import logo from "./logo.png";

class DashBoard extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt="logo" />
        <form className="form">
          <div className="form-input">
            <input
              className="col-sm-10"
              type="text"
              name="name"
              id="name"
              placeholder="Enter username"
            />
          </div>
          <div className="form-input">
            <input
              className="col-sm-10"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <input
            type="submit"
            name="submit"
            value="Login"
            className="btn-login"
          />
        </form>
      </div>
    );
  }
}

export default DashBoard;
