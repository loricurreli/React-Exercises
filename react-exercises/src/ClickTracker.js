import React from "react";

export class ClickTracker extends React.Component{
    state = {
        lastClickedButton: null}

    clickUpdate = (e) => {
        this.setState({target: e.target.textContent})
    }

    render(){
        return (
            <div>
                {
                    this.state.target
                    ? <h1>Button pressed: {this.state.target}</h1>
                    : <h1>Press a button</h1>
                }
                <button onClick={this.clickUpdate}>Button 1</button>
                <button onClick={this.clickUpdate}>Button 2</button>
                <button onClick={this.clickUpdate}>Button 3</button>
            </div>
        )
    }
}