import React, { useState } from "react";

export function ClickCounter(){

    const [counter, setCounter] = useState(0);

    function handleIncrement(){
        setCounter((counter) => counter + 1)
    }
        return(
            <div>
                <h2>Count: {counter}</h2>
                <button onClick={handleIncrement}>INCREMENTA</button>
            </div>
        )
}
