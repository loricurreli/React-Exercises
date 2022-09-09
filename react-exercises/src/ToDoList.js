import React from "react";

export class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    addItem = () => {
        const input = document.querySelector("input")
        this.setState({items: this.state.items.concat(input.value)})
        input.value=""
    }
    clearList = () => {
        this.setState({items: []})
    }
    render(){
        const list = this.state.items.map((value) => <li key={value}>{value}</li>);
        return (
            <div>
              <ul>{list}</ul>
              <input type="text"/>
              <button onClick={this.addItem}>Add to list</button>
              <button onClick={this.clearList}>Clear List</button>
            </div>
        );
    }
}
