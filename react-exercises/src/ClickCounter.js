import React, { useState } from "react";

export function ClickCounter(){

    const [counter, setCounter] = useState(0);
        return(
            <div>
                <h2>Count: {counter}</h2>
                <button onClick={() => setCounter(counter+1)}>INCREMENTA</button>
            </div>
        )
}
