import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
//import User from "./components/User";
import Users from "./components/Users";

class App extends Component {

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(user => id !== user.id)
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
