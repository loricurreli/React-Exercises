import React from "react";

export class CounterDisplay extends React.Component{
    render(){
        return <p>Counter: {this.props.count}</p>
    }
}