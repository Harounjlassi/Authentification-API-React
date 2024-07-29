import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    message: "",
  };
  //Register form submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };
    axios
      .post("/register", data)
      .then((response) => {
        console.log(response);
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
            <h3 className="text-center">Register Account</h3>
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter User Name"
                  name="name"
                  required
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
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
                  placeholder="Password"
                  name="password"
                  required
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Confirme Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password_confirmation"
                  required
                  onChange={(e) => {
                    this.setState({ password_confirmation: e.target.value });
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <br />
            Have an account?
            <Link to="/login"> Click Here</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
