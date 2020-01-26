import React, { Component } from "react";
import "./SignupForm.css";
import "./Network";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      confirmPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }
  render() {
    return (
      <div className="SignupForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />

          <center>
            <button>Submit</button>
          </center>
        </form>
      </div>
    );
  }
}
