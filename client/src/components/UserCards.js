import React, { Component } from "react";
import { Card } from "antd";
import convert from "../utils/convert";
const { Meta } = Card;

export default class UserCard extends Component {
  
  
  fullPageRedirect = () => {
    this.props.history.push({
      pathname: "/property",
      state: {
        data: this.props.data
      }
    });
  };

  render() {
    const { pname, price, location, pimg } = this.props.data;
    return (
      <div id='propertyCard'>
        <Card
          hoverable
          style={{
            marginTop: "20px"
          }}
          cover={<img className='cardimg' alt='example' src={pimg} />}
          >
          <Meta
            title={
              <div className='contactCard'>
                <span style={{ cursor: "pointer" }} onClick={this.onClick}>
                  {pname}
                </span>
              </div>
            }
            description={
              <div>
                <p>{location}</p>
                <h1>{convert(price)}</h1>
                <button
                  onClick={this.fullPageRedirect}
                  className='button is-primary'>
                  See details
                </button>
              </div>
            }
          />
        </Card>
      </div>
    );
  }
}
