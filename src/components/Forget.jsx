import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Forget extends Component {
  state = {
    email: "",
    message: "",
  };
  //Register form submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
    };
    axios
      .post("/forgetPassword", data)
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
            <h3 className="text-center">Forget Account</h3>
            <form onSubmit={this.formSubmit} id="forgetFrom">
              {error}
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  placeholder="Enter email"
                  required
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Forget Password
              </button>
              <br />
              Don't Have an account?
              <Link to="/login"> Click Here</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Forget;
