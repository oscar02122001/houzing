import React from "react";
import logo from "./img/logo.svg";
import "./header.css";
import ModalAdvanced from "./advanced";

class Headerrr extends React.Component {
  state = {
    toggle: false,
  };
  render() {
    return (
      <div className="header-container">
        <div className="container header-top">
          <div className=" header-logo">
            <a href="#">
              <img src={logo} alt="site-logo" />
            </a>
          </div>
          <div className="nav">
            <ul className="header-list nav-list">
              <li className="header-item">
                <a className="header-link" href="#">
                  Home
                </a>
              </li>
              <li className="header-item">
                <a className="header-link" href="#">
                  Properties
                </a>
              </li>
              <li className="header-item">
                <a className="header-link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <button className="header-login">login</button>
        </div>
        <div className="search-tools">
          {this.state.toggle && <ModalAdvanced />}
          <div className="container search-wrap">
            <div className="input-wrap">
              <input
                className="big-input"
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
              />
            </div>
            <button
              className="advanced"
              onClick={() => this.setState({ toggle: !this.state.toggle })}
            >
              Advanced
            </button>
            <button className="search">Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Headerrr;
