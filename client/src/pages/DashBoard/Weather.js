import React, { useState, Component } from "react";
import Axios from "axios";
import Navbar from "../../components/Navbar";
const api = {
  key: "ccb13f92ca8be364ae16f047190e6218",
  base: "https://api.openweathermap.org/data/2.5/"
};

export default class Weather extends Component {
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
    return <Feather />;
  }
}

function Feather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = d => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      style={{
        marginTop: "65px",
        height: "100vh"
      }}
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
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
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
