import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return(
            <div>
                <Welcome  name="Lorenzo" age={23} />  
            </div>
        )
    }
}