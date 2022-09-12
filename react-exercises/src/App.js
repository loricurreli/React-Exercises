import React from "react";
import { ClickCounter } from "./ClickCounter";


export function App(){
    function onCounterChange(counter){
        console.log("Current value is ",counter)
    }

    return(
        <div> 
            <ClickCounter onCounterChange={onCounterChange}/>
        </div>
    )
}