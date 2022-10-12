import  { selectCounter }  from './featured/Counter/selectors'
import { useDispatch , useSelector } from 'react-redux'
import { counterActions } from './featured/Counter/reducers'
import { useCallback } from 'react'

export const Counter = () =>{
  const currentCounter = useSelector(selectCounter)
  const dispatch = useDispatch()

  const increment = useCallback(() => {
      dispatch(
        counterActions.increment(1)
      )
  }, [])
  const decrement = useCallback(() => {
    dispatch(
      counterActions.decrement(1)
    )
  }, [])
  const reset = useCallback(() => {
    dispatch(
      counterActions.reset()
    )
  }, [])
  return(
    <div>
        <h1>Counter</h1>
        <p>Current value: {currentCounter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}