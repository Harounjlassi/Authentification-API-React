import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    let email;
    let name;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }
    return (
      <div>
        <br />
        <br />
        <div className="row">
          <div className="jumbotron col-lg-4 offset-lg-4">
            <h3 className="text-center">User Account</h3>
            <ul class="list-group">
              <li class="list-group-item">Name: {name}</li>
              <li class="list-group-item">Email: {email}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
