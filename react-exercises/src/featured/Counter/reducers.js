import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, payload) => {
      state.counter+=payload.payload
    },
    decrement: (state, payload) => {
      state.counter-=payload.payload
    },
    reset: (state) => {
      state.counter=0
    },
  },
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer