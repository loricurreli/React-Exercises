
import React, {useState } from "react";

export function useCounter(initialValue = 0){
    const[counter, setCounter] = useState(initialValue)

    const increment = () => setCounter(c => c + 1)
    const decrement = () => setCounter(c => c - 1)
    const reset = () => setCounter(initialValue)

    return {value: counter, onIncrement: increment, onDecrement: decrement, onReset: reset}



}
export function ClickCounter({initialValue = 0}) {
  const {value, onIncrement, onDecrement, onReset} = useCounter(initialValue)

  return (
      <div>
          <h1>Counter: {value}</h1>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onReset}>Reset</button>
      </div>
  )
}

