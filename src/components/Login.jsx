import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };
  //Login form submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    //After Login Redirect to profile
    if (this.state.loggedIn) {
      //   return redirect("/profile");
      return <Navigate to="/profile" />;
    }
    return (
      <div>
        <br />
        <br />
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Login Account</h3>
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              <br />
              Forget My Password?
              <Link to="/forget"> Click Here</Link>
              <br />
              Don't Have an account?
              <Link to="/register"> Click Here</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
