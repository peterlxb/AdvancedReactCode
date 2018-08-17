import React, { Component } from "react";
import uuid from "uuid";
import { Consumer } from "../../Context";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);

    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control form-control-lg"
                      value={name}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Phone"
                      className="form-control form-control-lg"
                      value={phone}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
