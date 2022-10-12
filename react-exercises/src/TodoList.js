import  { selectTodos }  from './featured/Todo/selectors'
import { useSelector, useDispatch} from 'react-redux'
import { useCallback} from "react"
import { todosActions } from "./featured/Todo/reducers"
import { Modify } from './Modify'

export const TodoList = () => {
  const todoList= useSelector(selectTodos)
  const dispatch = useDispatch()
  const remove = useCallback( (id) =>{
       dispatch(
        todosActions.remove(id)
       )
  }, [])
  
  return (
    <div style={todos}>
      TODOS LIST
      {todoList.map((todo) => 
          <div key={todo.id}>
            <p>TODO: {todo.id}</p>
            <p>TITLE: {todo.title}</p>
            <p>COMPLETED: {todo.completed}</p>
            <button onClick={() => remove(todo.id)}>Remove</button>
            <Modify todo={todo} />
          </div>
          
      )}
    </div>
  )
}

const todos = { 
  padding: 10,
  marginTop: 30,
  borderRadius: 10,
  backgroundColor: "lightcyan"
}