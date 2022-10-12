import { configureStore } from '@reduxjs/toolkit'

import {todosReducer} from './Todo/reducers'

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

export default store