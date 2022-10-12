import { createSelector } from '@reduxjs/toolkit'


const currentCounter = (state) => state.counter

export const selectCounter = createSelector(
  currentCounter,
  (state) => state.counter
)