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