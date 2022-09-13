import React, { useEffect, useState } from "react";

export function ClickCounter(props){

    const [counter, setCounter] = useState(0);
    useEffect(() => props.onCounterChange(counter))

    function handleIncrement(){
        setCounter((counter) => counter+1)
    }
        return(
            <div>
                <h2>Count: {counter}</h2>
                <button onClick={handleIncrement}>INCREMENTA</button>
            </div>
        )
}
