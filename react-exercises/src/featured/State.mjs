import {  legacy_createStore as createStore } from 'redux'
const initialCounter = 0 

export const counterReducer = (state = {value: initialCounter}, action) => {
    switch(action.type){
        case 'COUNTER@INCREMENT':
            return {value: state.value + action.payload}
        case 'COUNTER@DECREMENT':
            return {value: state.value - action.payload}
        case 'COUNTER@RESET':
            return {value: initialCounter}
        default:
            return state
    }
}


const counterStore = createStore(counterReducer)

counterStore.dispatch({ type: 'COUNTER@INCREMENT', payload: 3 })

console.log(counterStore.getState())