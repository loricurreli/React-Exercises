import React, { useEffect, useState } from "react";

export function ClickCounter(props){

    const [counter, setCounter] = useState(0);

    useEffect(() => props.onCounterChange(counter))

        return(
            <div>
                <h2>Count: {counter}</h2>
                <button onClick={() => setCounter(counter+1)}>INCREMENTA</button>
            </div>
        )
}
