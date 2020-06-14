import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import NewTask from "./components/NewTask"
import ToDoList from "./components/ToDoList"
import config from "./config"
import './App.css';

class App extends Component {
  render(){
      return (
      <div className="App">
        <Navbar />
        <NewTask />
        <ToDoList />
      </div>
    );
  }
}

export default App;
