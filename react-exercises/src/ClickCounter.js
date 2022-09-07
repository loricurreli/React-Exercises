import React from "react";

export class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState((state) => ({
            count: state.count + 1
          }));
    }
    render(){
        return(
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.increment()}>INCREMENTA</button>
            </div>
        )
    }
}