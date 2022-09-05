import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Counter initialCounter={25} incrementValue={10} incrementDelay={3000}/>
            </div>
        );
    }
}