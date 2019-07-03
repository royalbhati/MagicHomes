import React, { Component } from "react";
import { Card, Slider, InputNumber, Row, Col } from "antd";

const { Meta } = Card;
export default class NoteCard extends Component {
  state = {
    price: 0,
    rating: 0
  };
  onChangePrice = value => {
    this.setState({
      price: value
    });
  };
  onChangeRating = value => {
    this.setState({
      rating: value
    });
  };
  filterClick = () => {
    const filterobj = {
      ...this.state
    };
    return filterobj;
  };
  render() {
    const { price, rating } = this.state;
    return (
      <div>
        <Card
          hoverable
          style={{
            width: "90%",
            marginTop: "2rem"
          }}
          >
          <Meta title='Filter' />
          <Row>
            <h1 style={{ marginTop: "3em" }}>Price</h1>
            <Col span={12}>
              <Slider
                min={100000}
                max={20000000}
                onChange={this.onChangePrice}
                value={this.state.price}
                step={100000}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                width='100px'
                min={100000}
                max={20000000}
                style={{ marginLeft: 16 }}
                value={price}
                onChange={this.onChangePrice}
              />
            </Col>
          </Row>
          <Row>
            <h1 style={{ marginTop: "3em" }}>Rating</h1>
            <Col span={12}>
              <Slider
                min={0}
                max={5}
                onChange={this.onChangeRating}
                value={this.state.rating}
                step={1}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={5}
                style={{ marginLeft: 16 }}
                value={rating}
                onChange={this.onChangeRating}
              />
            </Col>
          </Row>
          {this.props.children}
        </Card>
      </div>
    );
  }
}
