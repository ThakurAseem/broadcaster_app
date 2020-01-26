import React, { Component } from "react";
import { Signup } from "./Network.js";
import "./SignupPage.css";
import SignupForm from "./SignupForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  async handleLogin(idPass) {
    console.log(idPass);
    let user = await Signup(idPass);
    if (user) {
      localStorage.set("token", user.token);
      window.location = "/dashboard";
    }
  }
  render() {
    return (
      <div className="SignupPage">
        <Navbar
          links={[
            { to: "/login", name: "Login" },
            { to: "/signup", name: "Signup" }
          ]}
        />
        <div className="signup">Sign Up</div>
        <SignupForm login={this.handleLogin} />
        <Footer />
      </div>
    );
  }
}
