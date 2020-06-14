import React, { Component } from "react"
import firebase from "firebase"
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
        db.settings({
          timestampsInSnapshots: true
        });
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
      };
    render(){
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        return(
            <form onSubmit={this.addTask}>
                <label for="currentTime">Current Time</label>
                    <span name="currentTime" id="currentTime">{dateTime}</span>
                <label for="description">Task Details</label>
                    <input name="description" id="description" type="text" placeholder="Description" value={this.state.description} onChange={this.updateInput} />
                <label for="deadline">Deadline</label>
                    <span name="deadline" id="deadline">
                        <input name="deadlineDate" id="deadlineDate" type="date" min={this.date} onChange={this.updateInput} value={this.state.deadlineDate} />
                        <input name="deadlineTime" id="deadlineTime" type="time" onChange={this.updateInput} value={this.state.deadlineTime} />
                    </span>
                <button type="submit" value="Add Task" onClick="submit()">Add Task</button>
            </form>
        );
    }
}

export default NewTask