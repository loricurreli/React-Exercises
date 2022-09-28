import React from "react";
import { ToDoList } from "./ToDoList";

export const App = () => {
  const render = (state, fn) => state.map((item, i) =>
   <li key={i}>{item} 
  <button value={item} onClick={fn}>Delete</button>
  </li>)
  return (
    <ToDoList render={render} />
  )
}