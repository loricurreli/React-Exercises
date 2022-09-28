import {useState,useCallback } from "react";
export function useCounter(initialValue = 0){
    const[counter, setCounter] = useState(initialValue)
    return {value: counter, 
        onIncrement: useCallback(() => setCounter(count => count + 1), []),
        onDecrement: useCallback(() => setCounter(count => count - 1), []),
        onReset: useCallback(() => setCounter(initialValue),[initialValue])}


}


export function Counter({initialValue = 0}) {
    const {value, onIncrement, onDecrement, onReset} = useCounter(initialValue)
  
    return (
        <div>
            <p>Counter: {value}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
  }