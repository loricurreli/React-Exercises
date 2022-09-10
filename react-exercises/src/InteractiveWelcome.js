import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{
    state = {
        nameInsert: false,
        user: null
    }
    handleChange = (e) => {
        this.setState({user: e.target.value});
        this.setState({nameInsert: false});
    }

    handleSubmit = (e) =>{
        this.setState({nameInsert: true});
        e.preventDefault();
      }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                        <input type="submit" value="Submit" />
                </form>

                {this.state.nameInsert && <Welcome name={this.state.user} />}
            </div>
        )
    }
}