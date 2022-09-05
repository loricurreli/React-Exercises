import React from "react"

export class Counter extends React.Component{
    state = {
        count: this.props.initialCounter
    }

    constructor(props){
        super(props)
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: this.state.count + this.props.incrementValue,
                }})
            }, this.props.incrementDelay)
        }
    render(){
        return <p>Counter: {this.state.count}</p>
    }
}