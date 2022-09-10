import React from "react";
import { Login } from "./Login"
export class App extends React.Component{
    state = {
        loggedIn: false
    }
    onSubmit = () => {
        this.setState({ loggedIn: true})
    }
    render(){
        return(
            <div>
                <Login onLogin={this.onSubmit}/>
            </div>
        )
    }
}