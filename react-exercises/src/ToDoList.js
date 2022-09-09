import React from "react";

export class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    addItem = () => {
        const value = document.querySelector("input").value
        this.setState({items: this.state.items.concat(value)})
    }
    render(){
        const list = this.state.items.map((value) => <li key={value}>{value}</li>);
        return (
            <div>
              <ul>{list}</ul>
              <input type="text"/>
              <button onClick={this.addItem}>Add to list</button>
            </div>
        );
    }
}
