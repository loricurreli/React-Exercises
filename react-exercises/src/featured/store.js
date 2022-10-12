import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from './Counter/reducers'
import {todosReducer} from './Todo/reducers'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
})

export default store