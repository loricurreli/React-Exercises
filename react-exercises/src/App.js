import React from "react";
import { ToDoList } from "./ToDoList";

export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ToDoList values={this.props.values}/>
        )
    }
}