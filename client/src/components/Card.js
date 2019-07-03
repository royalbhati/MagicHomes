import React, { Component } from "react";
import { Card, Icon, Popconfirm, message } from "antd";
import axios from "axios";
import convert from "../utils/convert";
const { Meta } = Card;

export default class PropCard extends Component {
  onEdit = () => {
    this.props.history.push({
      pathname: "/editproperty",
      state: {
        ...this.props.data,
        msg:""
      }
    });
  };
  
  confirm = e => {
    console.log(e);
    axios
      .delete(`/api/${this.props.data._id}`)
      .then(res => message.success("Deleted! Please refresh to view Changes"))
      .catch(err=>message.error(err))
    this.props.history.push("/");
    
  };

  cancel = e => {};

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
          actions={[
            <Icon type='edit' onClick={this.onEdit} />,
            <Popconfirm
              title='Are you sure you want to delete this?'
              onConfirm={this.confirm}
              onCancel={this.cancel}
              okText='Yes'
              cancelText='No'>
              <Icon type='delete' onClick={this.onDelete} />
            </Popconfirm>
          ]}>
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
