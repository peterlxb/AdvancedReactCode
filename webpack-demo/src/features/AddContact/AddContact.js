import React, { Component } from "react";
import uuid from "uuid";
import { Consumer } from "../../Context";

import TextInputGroup from "../../common/TextInputGroup/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check Form
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

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
      phone: "",
      errors: {}
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="form-control form-control-lg"
                    value={name}
                    onChange={this.handleChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone"
                    className="form-control form-control-lg"
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                  />

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
