import React, { Component } from 'react';
import Users from './Components/Users';
import Navbar from './Navbar';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Harry Potter",
        department: "Magic",
        salary: "9000"
      },
      {
        id: 2,
        name: "Peter Parker ",
        department: "Photographer",
        salary: "8000"
      },
      {
        id: 3,
        name: "Ahmet Zurnaci",
        department: "Developer",
        salary: "10000"
      }
    ]
  }
  render() {
    return (
      <div className = "App">
        <Navbar title = "User App"/>
        <hr/>
        <Users users = {this.state.users}/>
      </div>
    )
  }
}

export default App;