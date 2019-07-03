import React, { Component } from "react";
import { Layout, Icon, Typography, Card, Divider, List, Avatar } from "antd";
import convert from "../utils/convert";
import Nav from "./Nav";

const { Text } = Typography;
const { Meta } = Card;
const { Content } = Layout;

export default class ViewProp extends Component {
  render() {
    const {
      rating,
      pname,
      ameni,
      price,
      pimg,
      desc,
      location,
      size,
      onum,
      oname
    } = this.props.location.state.data;

    const color = [
      "#4CAF50",
      "#CDDC39",
      "#FFEB3B",
      "#FF5722",
      "#FF5722",
      "#FF5722"
    ];
    let amenities = [];
    ameni.split(",").map(elem => {
      const temp = {
        title: elem
      };
      amenities.push(temp);
    });
    return (
      <div>
        <Layout>
          <Nav />
          <Content
            style={{
              background: "#fff",
              padding: 24,
              marginTop: 35,
              minHeight: 280
            }}>
            <section
              id='frontpage'
              class='hero is-medium '
              style={{
                backgroundImage: `url(${pimg})`
              }}>
              <div class='hero-body' />
            </section>

            <div class='proptitle'>
              <div>
                <h1 class='title is-3'>{pname}</h1>
                <Text type='secondary'>{location}</Text>
              </div>
              <div>
                <span className='rating' style={{ color: color[5 - rating] }}>
                  <div>
                    <h1 class='title is-5'>
                      <Text type='secondary'>Rating</Text>
                    </h1>
                  </div>
                  {rating} <i class='fas fa-star' />
                </span>
              </div>
            </div>
            <div class='propheading'>
              <h1 class='title is-5'>
                <Text type='secondary'>Price</Text>

                <span style={{ marginLeft: "200px" }}>
                  <Divider type='vertical' />
                  <Text type='secondary'>Size</Text>
                </span>
                <span style={{ marginLeft: "200px" }}>
                  <Divider type='vertical' />
                  <Text type='secondary'>Status</Text>
                </span>
              </h1>
            </div>
            <div class='propDetails'>
              <h1 class='title is-5'>
                <i class='fas fa-rupee-sign' />
                <span style={{ marginLeft: "0.6em" }}>{convert(price)}</span>
                <span style={{ marginLeft: "150px" }}>{size}</span>
                <span style={{ marginLeft: "205px" }}>Under Construction</span>
              </h1>
            </div>
            <Card style={{ width: 800, marginTop: "3em" }}>
              <Meta title='About' description={desc} />
            </Card>
            <Card style={{ width: 800, marginTop: "3em" }}>
              <Meta
                title='Amenities'
                description={
                  <List
                    itemLayout='horizontal'
                    dataSource={amenities}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar src='http://freepngclipart.com/download/thumbs_up/15948-clipart-thumbs-up-clipart.png' />
                          }
                          title={<a href='https://ant.design'>{item.title}</a>}
                        />
                      </List.Item>
                    )}
                  />
                }
              />
            </Card>

            <Card style={{ width: 800, marginTop: "3em" }}>
              <Meta
                title='Contact'
                description={
                  <div className='contact'>
                    <Icon type='user' />
                    <span style={{ marginLeft: "2rem" }}>{oname}</span>
                    <div>
                      <Icon type='phone' />
                      <span style={{ marginLeft: "2rem" }}>{onum}</span>
                    </div>
                  </div>
                }
              />
            </Card>
          </Content>
        </Layout>
      </div>
    );
  }
}
