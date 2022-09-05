import React from "react"

export class Counter extends React.Component{
    state = {
        count: 0
    }

    constructor(props){
        super(props)
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: this.state.count +1,
                }})
            }, 1000)
        }
    render(){
        return <p>Counter: {this.state.count}</p>
    }
}