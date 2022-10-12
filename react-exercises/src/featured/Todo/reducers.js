import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todosSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    add: (state, payload) => {
     state.todos.push(payload.payload)
    },
    remove: (state, payload) => {
      state.todos=state.todos.filter((todo) => todo.id!==payload.payload)
    },
    update: (state, payload) => {
      
      state.todos=state.todos.map((todo) => todo.id!==payload.payload.id ? todo : payload.payload)
  
}}})

export const todosActions = todosSlice.actions
export const todosReducer = todosSlice.reducer