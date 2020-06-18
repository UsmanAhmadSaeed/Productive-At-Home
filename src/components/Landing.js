import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container valign-wrapper">
        <div className="row">
          <h1 className="landingH1">Welcome to Productive at Home</h1>          
          <p className="landingDescription">
            This is a webapp to-do list which lets you create to do lists and plan your tasks in traditional way. Yet!
            <br />
            We are working on it so that you'll be able to complete a task, and on each completed task, app will reward you with something for your hardwork.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;