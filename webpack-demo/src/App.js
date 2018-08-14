import React, { Component } from "react";
import { Layout } from "antd";
import Headers from "./layout/Layout";
import Contact from "./features/Contact/Contact";

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Headers branding="Contact Manager" />
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <Contact
              name="Peter"
              email="peter@gmail.com"
              phone="555-5555-555"
            />
            <Contact
              name="Peter"
              email="peter@gmail.com"
              phone="555-5555-555"
            />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
