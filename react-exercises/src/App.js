import React from "react";
import { Counter } from "./Counter";
import { NewTodo } from "./NewTodo";
import { TodoList } from "./TodoList";
export const App = () => {
  console.log(Counter)
  return (
    <div >
      <Counter/>
      <NewTodo />
      <TodoList />
    </div>
    
  )
}

