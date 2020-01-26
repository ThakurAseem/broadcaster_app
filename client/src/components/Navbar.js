import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="title">Broadcaster-app</div>
        <ul className="actions">
          {this.props.links.map(link => (
            <Link to={`${link.to}`}>
              <li> {link.name} </li>
            </Link>
          ))}
        </ul>
      </header>
    );
  }
}
