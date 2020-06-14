import React, { Component } from "react"
import firebase from "firebase/app"
import "firebase/firestore"

class NewTask extends Component{
    constructor() {

        super();
        this.state = {
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
     addTask = async e => {
        e.preventDefault();
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        
        const db = firebase.firestore();
        
        await db.collection("todos").add({
          currentDate: date,
          currentTime: time,
          deadlineDate: this.state.deadlineDate,
          deadlineTime: this.state.deadlineTime,
          description: this.state.description,
          completed: false
        });

        this.setState({
          deadlineDate: "",
          deadlineTime: "",
          description: ""
        });
        console.log("Done")
      };

      render(){
        return(
            <form id="newTask" onSubmit={this.addTask}>
                <label htmlFor="description">Task Details :</label>
                    <input name="description" id="description" type="text" placeholder="Description" onChange={this.updateInput} value={this.state.description} />
                <label htmlFor="deadline">Deadline</label>
                    <span name="deadline" id="deadline">
                        <input name="deadlineDate" id="deadlineDate" placeholder="MM/DD/YYYY" type="date" min={this.date} onChange={this.updateInput} value={this.state.deadlineDate} />
                        <input name="deadlineTime" id="deadlineTime" placeholder="HH:MM AM/PM" type="time" onChange={this.updateInput} value={this.state.deadlineTime} />
                    </span>
                <button className="btn btn-primary"type="submit" value="Add Task">Add Task</button>
            </form>
        );
    }
}

export default NewTask