import React, { Component } from "react";
import "./LoginForm.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="User Id"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <center>
            <button>Submit</button>
          </center>
        </form>
      </div>
    );
  }
}
