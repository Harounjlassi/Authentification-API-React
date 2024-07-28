import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">User Account</h3>
            <ul class="list-group">
              <li class="list-group-item">Name:</li>
              <li class="list-group-item">Email:Email</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
