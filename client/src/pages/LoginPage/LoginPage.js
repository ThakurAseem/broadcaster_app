import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Login } from "./Network.js";
import "./LoginPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Axios from "axios";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  async handleLogin(idPass) {
    console.log(idPass);
    let user = await Login(idPass);
    if (user) {
      localStorage.setItem("token", JSON.stringify(user.token));
      window.location = "/dashboard";
    }
  }
  async componentWillMount() {
    try {
      let res = await Axios.get("http://localhost:5000/dashboard", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
      if (res.data.resType === 1) {
        window.location = "/dashboard";
      }
    } catch (e) {
      console.log("error" + e);
      window.location = "/login";
    }
  }
  render() {
    return (
      <div className="LoginPage">
        <Navbar
          links={[
            { to: "/login", name: "Login" },
            { to: "/signup", name: "Signup" }
          ]}
        />
        <div className="login">Login</div>
        <LoginForm login={this.handleLogin} />
        <Footer />
      </div>
    );
  }
}
