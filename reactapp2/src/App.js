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

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(users => id !== users.id)
    })
  } 

  render() {
    return (
      <div className = "App">
        <Navbar title = "User App"/>
        <hr/>
        <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
      </div>
    )
  }
}

export default App;