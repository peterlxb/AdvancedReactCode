import React, { Component } from "react";
import PropTypes from "prop-types";

import { Consumer } from "../../Context";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onshowContact: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("hello");
    this.setState({
      onshowContact: !this.state.onshowContact
    });
  };

  onDeleteClick = (id, dispatch) => {
    console.log("clicked");
    // this.props.deleteClickHandler();
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { onshowContact } = this.state;

    let showConatctList;
    if (onshowContact) {
      showConatctList = (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">
            Phone:
            {phone}
          </li>
        </ul>
      );
    } else {
      showConatctList = null;
    }

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  onClick={() => this.handleClick()}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showConatctList}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
