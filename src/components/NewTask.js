import React, { Component } from "react"
import firebase from "firebase/app"
import "firebase/firestore"

class NewTask extends Component{
    constructor() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        super();
        this.state = {
         currentTime: {dateTime},
         deadlineDate: "",
         deadlineTime: "",
         description: ""
        };
    }
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    addTask = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.collection("todos").add({
          currentTime: this.state.currentTime,
          deadlineDate: this.state.deadlineDate,
          deadlineTime: this.state.deadlineTime,
          description: this.state.description
        });  
        this.setState({
          currentTime: "",
          deadlineDate: "",
          deadlineTime: "",
          description: ""
        });
        console.log("Done")
      };
    render(){
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        return(
            <form id="newTask" onSubmit={this.addTask}>
                <label htmlFor="currentTime">Current Time</label>
                    <span name="currentTime" id="currentTime">{dateTime}</span>
                <label htmlFor="description">Task Details</label>
                    <input name="description" id="description" type="text" placeholder="Description" onChange={this.updateInput} value={this.state.description} />
                <label htmlFor="deadline">Deadline</label>
                    <span name="deadline" id="deadline">
                        <input name="deadlineDate" id="deadlineDate" type="date" min={this.date} onChange={this.updateInput} value={this.state.deadlineDate} />
                        <input name="deadlineTime" id="deadlineTime" type="time" onChange={this.updateInput} value={this.state.deadlineTime} />
                    </span>
                <button type="submit" value="Add Task">Add Task</button>
            </form>
        );
    }
}

export default NewTask