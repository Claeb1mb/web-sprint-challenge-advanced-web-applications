import React, { useState } from "react";
import axios from "axios";
// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route

class Login extends React.Component {
  state = {
    credentials: {
      username: "Lambda School",
      password: "i<3Lambd4",
    },
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("./protected");
      })
      .catch((err) => console.log({ err }));
  };

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome To BubblePage</h1>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
