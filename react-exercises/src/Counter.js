import React, { useEffect, useState } from "react"


export function Counter(){

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timerID = setInterval(() => setCounter(counter + 1), 1000)
        return () => clearInterval(timerID)
    })
    
    return <p>Counter: {counter}</p>
}