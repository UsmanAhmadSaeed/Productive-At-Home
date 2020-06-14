import React from "react"

function ToDoItem(props){
    return(
            <div id="item">
                <span id="creationDate">{props.creationDate} {props.creationTime}</span>
                <span id="taskDescription">{props.description}</span>
                <input id="status" type="checkbox" onChange={() => props.handleChange(props.id)} checked={props.completed} /><span id="statusText"></span>
                <span id="taskDeadline">{props.deadline} {props.deadlineTime}</span>
                <button className="btn btn-danger" onClick={() => props.handleDelete(props.id)} id="deleteTask"><i></i>Delete</button>
            </div>  
        );
}

export default  ToDoItem