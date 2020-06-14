import React, { Component } from 'react';
import config from "./config"
import Navbar from "./components/Navbar"
import NewTask from "./components/NewTask"

import './App.css';

class App extends Component {
  render(){
      return (
      <div className="App">
        <Navbar />
        <NewTask />
        {/* Main Component Goes Here */}
      </div>
    );
  }
}

export default App;
