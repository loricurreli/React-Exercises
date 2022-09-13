import React, { useEffect, useState } from "react"


export function Counter({initialInterval=1000, initialIncrement=10, initialValue=100}){

    const [counter, setCounter] = useState(initialValue);
    useEffect(() => {
        const timerID = setInterval(() => setCounter((counter) => counter + initialIncrement), initialInterval)
        return () => clearInterval(timerID)
    })
    
    return <p>Counter: {counter}</p>
}