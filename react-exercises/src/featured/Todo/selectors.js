import { createSelector } from '@reduxjs/toolkit'


const currentTodos = (state) => state.todos
export const selectTodos= createSelector(
  currentTodos,
  (state) => state.todos
)