import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Welcome  name="John" age={23} />  
            </div>
        )
    }
}