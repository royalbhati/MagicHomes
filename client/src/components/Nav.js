import React, { Component } from "react";
import { Layout, Button } from "antd";
import {withRouter} from 'react-router-dom'

const { Header } = Layout;
 class Nav extends Component {
   isAuth = () => {
     if (localStorage.getItem("jwtToken")) {
       return true;
     } else {
       return false;
     }
   };
   logout = () => {
     localStorage.removeItem("jwtToken");
     this.props.history.push({
       pathname: "/",
       state: {
         auth: false
       }
     });
   };
   login = () => {
     this.props.history.push("/login");
   };
   signup = () => {
     this.props.history.push("/signup");
   };
   addProperty = () => {
     this.props.history.push("/addproperty");
   };

   render() {
     return (
       <Header>
         <div className='brand'>
           <span
             style={{ cursor: "pointer" }}
             onClick={() => this.props.history.push("/")}>
             Magic Homes
           </span>
           <span />

           <span>
             {this.isAuth() ? (
               <Button type='danger' onClick={this.logout}>
                 Logout
               </Button>
             ) : (
               <span>
                 <button
                   class='button is-warning'
                   style={{ marginTop: "1rem" }}
                   onClick={this.login}>
                   Login
                 </button>
                 <button
                   class='button is-warning'
                   style={{ marginTop: "1rem" , "marginLeft":"10px"}}
                   onClick={this.signup}>
                   Signup
                 </button>
               </span>
             )}
           </span>
         </div>
         <div style={{ textAlign: "center" }}>
           {this.props.role === "admin" && this.isAuth() ? (
             <Button type='primary' onClick={this.addProperty}>
               Add New Property
             </Button>
           ) : null}
         </div>
       </Header>
     );
   }
 }
export default withRouter(Nav);