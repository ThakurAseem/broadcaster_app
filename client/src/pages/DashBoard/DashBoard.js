import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import News from "../News/News";
import Axios from "axios";
export default class DashBoard extends Component {
  checkLogin = async () => {
    try {
      let res = await Axios.get("http://localhost:5000/dashboard", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
      if (res.data.resType !== 1) {
        window.location = "/login";
      }
    } catch (e) {
      console.log("error" + e);
      window.location = "/login";
    }
  };
  componentWillMount() {
    this.checkLogin();
  }
  render() {
    return (
      <div>
        <Navbar
          links={[
            { to: "/weather", name: "Weather" },
            { to: "/dashboard", name: "Headlines" },
            {
              to: "/logout",
              name: "Logout"
            }
          ]}
        />
        <News />
      </div>
    );
  }
}
