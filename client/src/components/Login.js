import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import classnames from "classnames";
import jwtDecode from 'jwt-decode'
function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  onChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  

  onSubmit = event => {
    event.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/user/login", newUser)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const role = jwtDecode(localStorage.getItem("jwtToken")).role;
        this.props.history.push({
          pathname: "/",
        });
      })
      .catch(err => this.setState({ errors: err.response.data }));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <section class='hero is-warning is-fullheight'>
          <div class='hero-body'>
            <div class='container has-text-centered'>
              <div class='column is-4 is-offset-4'>
                <h3 class='title has-text-grey'>Login</h3>
                <p class='subtitle has-text-grey'>Please login to proceed.</p>
                <div class='box'>
                  <form onSubmit={this.onSubmit}>
                    <div class='field'>
                      <label className='label has-text-grey'>
                        {" "}
                        Enter Email
                      </label>
                      <div class='control'>
                        <input
                          onChange={this.onChangeEmail}
                          value={this.state.email}
                          className={classnames("input is-large", {
                            "is-danger": errors.email
                          })}
                          type='email'
                          placeholder='Your Email'
                          autofocus=''
                        />
                        {errors.email && (
                          <div className='help is-danger'>{errors.email}</div>
                        )}
                      </div>
                    </div>

                    <div class='field'>
                      <label className='label has-text-grey'>
                        {" "}
                        Enter Password
                      </label>

                      <div class='control'>
                        <input
                          onChange={this.onChangePassword}
                          value={this.state.password}
                          className={classnames("input is-large", {
                            "is-danger": errors.password
                          })}
                          type='password'
                          placeholder='Your Password'
                        />
                        {errors.passwords && (
                          <p className='help is-danger'>{errors.passwords}</p>
                        )}
                      </div>
                    </div>
                    <div class='field'>
                      <label class='checkbox'>
                        <input type='checkbox' />
                        Remember me
                      </label>
                    </div>
                    <button class='button is-block is-info is-large is-fullwidth'>
                      Login
                    </button>
                  </form>
                </div>
                <p class='has-text-grey'>
                  <Link to='/signup'>Sign Up</Link> &nbsp;·&nbsp;
                  <a href='../'>Forgot Password</a> &nbsp;·&nbsp;
                  <a href='../'>Need Help?</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// Login.propTypes = {
//     loginuser : PropTypes.func.isRequired,
//     auth:PropTypes.object.isRequired,
//     errors:PropTypes.object.isRequired
//   }

//   const mapStateToProps = (state) =>({
//     auth:state.auth,
//     errors:state.errors
//   })

export default Login;
