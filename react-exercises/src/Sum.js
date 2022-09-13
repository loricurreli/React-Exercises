import React from "react";

export function Sum({numbers = [0,1,2]}){
    let sum = 0;   
    numbers.forEach(element => {
        sum+=element
    });
    return(
        <div>
            <h1>{sum}</h1>
        </div>
    )
}
