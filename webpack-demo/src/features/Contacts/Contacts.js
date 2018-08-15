import React, { Component } from "react";
import Contact from "../Contact/Contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ]
    };
  }

  deleteContact = id => {
    console.log("delete contact");
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
