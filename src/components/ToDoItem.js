import React from "react"

function ToDoItem(props){
        return(
            <div style={{"margin-left":"50%"}}>
                <h3 id="creationDate">{props.creationDate} - {props.creationTime}</h3>
                <p id="taskDescription">{props.description}</p>
                <input type="checkbox" onChange={() => props.handleChange(props.id)} checked={props.completed} />
                <p id="taskDeadline">{props.deadline} - {props.deadlineTime}</p>

                <button onClick={() => props.handleDelete(props.id)} id="deleteTask"><i></i>Delete</button>
            </div>  
        );
}

export default  ToDoItem