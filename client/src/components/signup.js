import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import classnames from "classnames"

class signup extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        errors: {}
    }
    onChangeEmail = (event) => {
        this.setState({
            email:event.target.value
        })
        // this.setState({ [event.target.name]: event.target.value })

    }
    onChangePassword = (event) => {
        this.setState({
            password:event.target.value
        })
        // this.setState({ [event.target.name]: event.target.value })

    }
    onChangePassword2 = (event) => {
        this.setState({
            password2:event.target.value
        })
        // this.setState({ [event.target.name]: event.target.value })

    }

    onSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2

        }
        axios.post("/user/register",newUser)
        .then(res=>{
            this.props.history.push('/login')
        })
        // .then(this.props.history.push('/login'))
        .catch(err=>this.setState({errors:err.response.data}))


        // this.props.registeruser(newUser,this.props.history)
        //passings history to action to redirect

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
    }


  render() {
    const { errors } = this.state

    return (
      <div>
          <section class="hero is-warning is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Signup</h3>
                    <p class="subtitle has-text-grey">Enter your details</p>
                    <div class="box">

                        <form onSubmit={this.onSubmit}>
                            <div class="field">
                            <label className="label has-text-grey"> Enter Email</label>
                                <div class="control">
                                    <input
                                    onChange ={this.onChangeEmail}
                                    value={this.state.email}
                                    className={classnames("input is-large",{
                                        "is-danger":errors.email
                                    })}
                                     type="email" placeholder="Your Email" autofocus=""/>
                                       {errors.email && (<p classname="help is-danger">{errors.email}</p>)}
                                </div>
                            </div>

                            <div class="field">
                            <label className="label has-text-grey"> Enter Password</label>

                                <div class="control">
                                    <input
                                    onChange ={this.onChangePassword}
                                        value={this.state.password}
                                        className={classnames("input is-large",{
                                            "is-danger":errors.password,
                                        })}
                                    type="password" placeholder="Your Password"/>
                                {errors.password && (<p className="help is-danger">{errors.password}</p>)}

                                </div>
                            </div>
                            <div class="field">
                            <label className="label has-text-grey"> Confirm Password</label>

                                <div class="control">
                                    <input onChange ={this.onChangePassword2}
                                    value={this.state.password2}
                                    className={classnames("input is-large",{
                                        "is-danger":errors.passwords,
                                    })}
                                     type="password" placeholder="Your Password"/>
                                     {errors.passwords && (<p className="help is-danger">{errors.passwords}</p>)}

                                </div>
                            </div>

                            <button class="button is-block is-info is-large is-fullwidth">Register</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <Link to="/login">Login</Link> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
</section>
      </div>
    )
  }
}
// const mapStateToProps = (state)=>({
//     auth:state.auth,
//     //Auth in state.auth comes from root reducer
//     errors:state.errors
// });

// signup.propTypes={
//     registeruser:PropTypes.func.isRequired,
//     auth:PropTypes.object.isRequired,
//     errors:PropTypes.object.isRequired
// }
export default signup