import React, { Component } from 'react';
import User from './Components/User';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Navbar title = "User App"/>
        <hr/>
        <User name = "Harry Potter" department = "Magic" salary = "9000"/>
        <User name = "Peter Parker" department = "Photographer" salary = "8000"/>
        <User name = "Ahmet Zurnaci" department = "Developer" salary = "10000"/>
        <User />
      </div>
    )
  }
}

export default App;