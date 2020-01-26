import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.details.urlToImage
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
    return (
      <div
        style={{
          height: "400px",
          width: "300px",
          marginTop: "50px",
          borderRadius: "25px",
          // border: "0.5px solid black",
          margin: "20px",
          background:
            "linear-gradient(to bottom , rgba(50, 4, 80, 0.5), rgba(50, 4, 80, 0.1))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={this.state.img}
          alt={this.props.title}
          width="300px"
          height="250px"
          style={{ padding: "20px", borderRadius: "25px" }}
        />
        <Link
          to={{
            pathname: "/details",
            query: this.props.details
          }}
        >
          <h5 style={{ padding: "20px" }}>{this.props.details.title}</h5>
        </Link>
      </div>
    );
  }
}
