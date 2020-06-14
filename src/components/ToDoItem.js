import React from "react"

function ToDoItem(props){
        return(
            <div>
                <h3 id="creationDate">{props.creationDate}</h3>
                <p id="taskDescription">{props.description}</p>
                <input type="checkbox" checked={props.completed} />
                <p id="taskDeadline">{props.deadline}</p>
                <button id="editTask"><i></i></button>
                <button id="deleteTask"><i></i></button>
            </div>  
        );
}

export default  ToDoItem