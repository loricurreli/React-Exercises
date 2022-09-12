import React from "react";

export function Sum(props){
    let sum = 0;   
    props.numbers.forEach(element => {
        sum+=element
    });
    return(
        <div>
            <p>{sum}</p>
        </div>
    )
}