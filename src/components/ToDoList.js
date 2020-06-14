import React, { Component } from 'react';
import ToDoItem from "./ToDoItem"
import firebase from "firebase/app"
import "firebase/firestore"


class ToDoList extends Component{
    state = {
        data: []
    };

    componentDidMount = async () =>{
        const db = firebase.firestore();
        
        const data = [];

        const response = await db.collection("todos").get()
        
        response.forEach(function(doc) {
            let docData = doc.data();
            docData.docId = doc.id;
            data.push(docData)
        });

        this.setState({data});
    }

    handleChange = async (id) => {
        const data = [...this.state.data];

        let todo = data.find(val => val.docId === id);

        let index = data.indexOf(todo);
        
        data[index].completed = !data[index].completed;

        const db = firebase.firestore();
        
        await db.collection("todos").doc(todo.docId).update({
            completed: data[index].completed
        });

        this.setState({data});
    }

    handleDelete = async (id) => {
        const filteredData = this.state.data.filter(todo => todo.docId !== id);
        
        const db = firebase.firestore();
        
        await db.collection("todos").doc(id).delete();

        this.setState({date:filteredData})

    }

    render(){
        return(
            this.state.data.map(item => <ToDoItem 
                            key={item.docId} 
                            id={item.docId}
                            creationDate={item.currentDate} 
                            creationTime={item.currentTime}
                            description={item.description}
                            completed={item.completed}
                            deadline={item.deadlineDate}
                            deadlineTime={item.deadlineTime}
                            handleChange={this.handleChange}
                            handleDelete={this.handleDelete}
                            />)
        )
    }
};


export default  ToDoList