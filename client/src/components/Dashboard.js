import React, { Component } from "react";
import Card from "./Card";
import Card2 from "./Card2";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import { Layout } from "antd";
import Nav from "./Nav";
import UserCard from "./UserCards";
import jwtDecode from "jwt-decode";
import { Row, Col } from "antd";

const { Content } = Layout;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    data: "",
    isAuth: this.props.auth,
    loaded: false,
    role: "user",
    filterPrice: 1000000000000,
    filterRating: 5
  };
  componentDidMount() {
    if (localStorage.getItem("jwtToken")) {
      const role = jwtDecode(localStorage.getItem("jwtToken")).role;
      this.setState({ role: role });
    }
    Axios.get("/api/").then(res =>
      this.setState({ data: res.data.result, loaded: true })
    );
  }

  renderCards = data => {
    return data.map((elem, i) => {
      return (
        <Col span={8}>
          {this.state.role === "admin" ? (
            <Card key={i} history={this.props.history} data={elem} />
          ) : (
            <UserCard key={i} history={this.props.history} data={elem} />
          )}
        </Col>
      );
    });
  };
  renderFilterCards = (price = 0, rating = 0) => {
    const result = this.state.data.filter(elem => {
      return elem.rating <= rating || elem.price <= price;
    });

    return this.renderCards(result);
  };

  filterClick = () => {
    const { price, rating } = this.child.current.filterClick();
    this.setState({
      filterPrice: price,
      filterRating: rating
    });
  };

  render() {
    return (
      <div>
        <Layout>
          <Nav role={this.state.role} />
          <div>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                marginTop: 35,
                minHeight: 280
              }}>
              <section
                id='dashboard'
                className='hero is-medium is-primary is-bold'>
                <div className='hero-body'>
                  <div
                    className='container'
                    style={{ textAlign: "center" }}>
                    <h1 className='title dashcompanyName'>Magic Homes</h1>
                    <h2 className='subtitle'>
                      <span style={{ fontFamily: "'News Cycle', cursive" , "marginTop":"10px"}}>
                        One stop destination for your Dream Home
                      </span>
                    </h2>
                  </div>
                </div>
              </section>

              <Row>
                <Col span={5}>
                  <Card2 ref={this.child}>
                    <div style={{ marginTop: "2rem" }}>
                      <button
                        onClick={this.filterClick}
                        className='button is-primary'>
                        Search
                      </button>
                    </div>
                  </Card2>
                </Col>
                <Col span={19}>
                  <Row type='flex' gutter={19}>
                    {this.state.loaded
                      ? this.renderFilterCards(
                          this.state.filterPrice,
                          this.state.filterRating
                        )
                      : null}
                  </Row>
                </Col>
              </Row>
            </Content>
          </div>
        </Layout>
        )
      </div>
    );
  }
}

export default withRouter(Dashboard);
