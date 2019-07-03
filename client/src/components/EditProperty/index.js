import React, { Component } from "react";
import {Layout} from "antd";
import Nav from "../Nav";
import EditProp from "./editProperty";
const { Content } = Layout;

export default class index extends Component {
  render() {

    return (
      <div>
        <Layout>
          <Nav history={this.props.history} />
          <Content
            style={{
              background: "#fff",
              padding: 44,
              marginTop: 45,
              minHeight: 280
            }}>
            <EditProp data={this.props.location.state} />
          </Content>
        </Layout>
      </div>
    );
  }
}
