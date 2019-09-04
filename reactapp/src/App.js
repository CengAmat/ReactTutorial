import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
//import User from "./components/User";
import Users from "./components/Users";

class App extends Component {

  state = {
    users: [
      {
        id: 1,
        name: "Ahmet Zurnacı",
        salary: "10000",
        department: "Engineer"
      },
      {
        id: 2,
        name: "Peter Parker",
        salary: "6000",
        department: "Photographer"
      },
      {
        id: 3,
        name: "Harry Potter",
        salry: "7000",
        department: "Auror"
      }
    ]
  }

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
