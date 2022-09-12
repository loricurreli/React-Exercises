import React from "react";

export function Sum(props){
    let sum = 0;   
    props.numbers.forEach(element => {
        sum+=element
    });
    return(
        <div>
            <h1>{sum}</h1>
        </div>
    )
}
