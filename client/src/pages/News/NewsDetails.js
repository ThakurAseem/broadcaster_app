import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
export default class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.history.location.query.urlToImage
    };
    this.checkImageLoaded = this.checkImageLoaded.bind(this);
  }
  checkImageLoaded() {
    var tester = new Image();
    tester.onload = () => {};
    tester.onerror = () => {
      this.setState({
        img:
          "https://joebalestrino.com/wp-content/uploads/2019/02/Marketplace-Lending-News.jpg"
      });
    };
    tester.src = this.state.img;
  }
  componentWillMount() {
    this.checkImageLoaded();
  }
  render() {
    console.log("in details page");
    console.log(this.props.history.location.query.author);
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
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
        <div
          style={{
            height: "80vh",
            width: "80vw",
            marginTop: "80px",
            borderRadius: "25px",
            border: "2px solid black",
            boxShadow: "2px 2px 2px 2px #888888",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(to bottom , rgba(50, 4, 80, 0.5), rgba(50, 4, 80, 0.1))"
          }}
        >
          <h5 style={{ textAlign: "center" }}>
            {this.props.history.location.query.title}
          </h5>
          <img
            src={this.state.img}
            alt={this.props.title}
            width="300px"
            height="300px"
            style={{ padding: "20px", borderRadius: "25px" }}
          />
          <div
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <h6>source: {this.props.history.location.query.source.name}</h6>

            <h6 style={{ textAlign: "center" }}>
              <span style={{ color: "red" }}>Description: </span>
              {this.props.history.location.query.description}
            </h6>
            <a href={this.props.history.location.query.url}>URl</a>
            <h6>
              published at: {this.props.history.location.query.publishedAt}
            </h6>
            <h6 style={{ textAlign: "center" }}>
              {this.props.history.location.query.content}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
