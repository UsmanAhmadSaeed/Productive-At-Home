import React, { Component } from "react"
import ToDoItem from "./ToDoItem"

function ToDoList(){
        const List = ListItems.map(item => <ToDoItem 
            key={docId} 
            creationDate={creationDate} 
            description={description}
            completed={completed}
            deadline={deadline}
            />
        )
}

export default  ToDoList