import React, { Component } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: "this is news",
          to: "/gotodetails",
          urlToImage:
            "https://joebalestrino.com/wp-content/uploads/2019/02/Marketplace-Lending-News.jpg"
        }
      ]
    };
    this.fetchNews = this.fetchNews.bind(this);
  }
  fetchNews() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=27d8dfce63a04ed295d59af4f83493e4"
      )
      .then(response => {
        // handle success
        console.log(response.data.articles);
        this.setState({
          news: response.data.articles
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  componentWillMount() {
    this.fetchNews();
  }
  render() {
    return (
      <div
        style={{
          display: "flex",

          flexWrap: "wrap",
          marginTop: "100px",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.state.news.map(news => (
          <NewsCard details={news} />
        ))}
      </div>
    );
  }
}
