import React from 'react'
import { Result, Button } from "antd";
import {withRouter} from 'react-router-dom'

const StatusMap = {
  "403": {
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
  },
};

class ResultDemo extends React.Component {
  state = {
    status: "403"
  };
  onClick =() =>{
    this.props.history.push("/")
  }

  render() {
    const { status } = this.state;
    const resultProps = StatusMap[status];
    return (
      <div>
        <Result status={status} {...resultProps} />
        <div style={{ textAlign: "center" }}>
          <Button type='primary' onClick={this.onClick}>
            Back Home
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(ResultDemo)