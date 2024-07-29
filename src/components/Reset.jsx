import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Reset extends Component {
  state = {
    email: "",
    password: "",
    password_confirmation: "",
    token: "",
    message: "",
  };
  //Register form submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      token: this.state.token,
    };
    axios
      .post("/resetpassword", data)
      .then((response) => {
        this.setState({ message: response.data.message });
        document.getElementById("forgetFrom").reset();
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
      });
  };
  render() {
    //shiw error message
    let error = "";
    if (this.state.message) {
      error = (
        <div>
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        </div>
      );
    }
    return (
      <div>
        <br />
        <br />
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Reset Account</h3>
            <form onSubmit={this.formSubmit} id="forgetFrom">
              {error}
              <div className="form-group"></div>
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
              <div className="form-group">
                <label for="exampleInputEmail1">Pin Code</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Pin Code"
                  name="name"
                  required
                  onChange={(e) => {
                    this.setState({ token: e.target.value });
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

export default Reset;
