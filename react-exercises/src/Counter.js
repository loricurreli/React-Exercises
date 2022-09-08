import React from "react"
import { CounterDisplay } from "./CounterDisplay"

export class Counter extends React.Component{
    state = {
        count: this.props.initialCounter
    }        
    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: this.state.count + this.props.incrementValue,
                }})
            }, this.props.incrementDelay)
    }
    render(){
        return <CounterDisplay count={this.state.count} />
    }
}