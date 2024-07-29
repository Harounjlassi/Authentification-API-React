import React, { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Login from "../components/Login";
import Forget from "../components/Forget";
import Register from "../components/Register";
import axios from "axios";

export class Header extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    //Login user credentials
    axios
      .get("/user")
      .then((response) => {
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav user={this.state.user} setUser={this.setUser} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/profile"
                element={<Profile user={this.state.user} />}
              />
              <Route
                path="/login"
                element={
                  <Login user={this.state.user} setUser={this.setUser} />
                }
              />
              <Route path="/forget" element={<Forget />} />
              <Route
                path="/register"
                element={
                  <Register user={this.state.user} setUser={this.setUser} />
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default Header;
