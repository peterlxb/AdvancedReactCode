import React, { Component } from "react";
import PropTypes from "prop-types";
import { List } from "antd";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    console.log(this.props);
    const data = [this.props.email, this.props.phone];
    return (
      <div>
        <h4>{name}</h4>
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}

export default Contact;
