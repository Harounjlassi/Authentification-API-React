import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Nav extends Component {
  state = {
    loggedout: "",
  };
  logout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };
  render() {
    let buttons;
    let profile;
    if (localStorage.getItem("token")) {
      buttons = (
        <div>
          <Link className="nav-link" to="/" onClick={this.logout}>
            Logout
          </Link>
        </div>
      );
      profile = (
        <div>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
        </div>
      );
    } else {
      buttons = (
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Esay Learning
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a> */}
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">{profile}</li>
            </ul>
            <span className="navbar-text">{buttons}</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
