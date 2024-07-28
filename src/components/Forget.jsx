import React, { Component } from "react";
import { Link } from "react-router-dom";

class Forget extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">Forget Account</h3>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
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
