import React, { Component } from "react";
import Axios from "axios";
export default class Logout extends Component {
  async componentWillMount() {
    let res = await Axios.get("http://localhost:5000/logout", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    console.log(res.data.resType);
    if (res.data.resType === 1 || res.data.resType === -1) {
      console.log("Hello");
      window.location = "/login";
    }
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3em"
        }}
      >
        <div>Logging out...</div>
      </div>
    );
  }
}
