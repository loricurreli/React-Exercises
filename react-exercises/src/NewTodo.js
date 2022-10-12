import { useCallback } from "react"
import { useDispatch } from 'react-redux'
import { todosActions } from "./featured/Todo/reducers"
export const NewTodo = () => {
  const dispatch = useDispatch()
  const addNewTodo = useCallback((e) => {

    e.preventDefault()
    dispatch(
      todosActions.add({
        id: e.target.elements[0].value,
        title: e.target.elements[1].value,
        completed: e.target.elements[2].value
      })
    )
    
}, [])
  return(
    <form style={formStyle} onSubmit={addNewTodo}>
      <label>ID</label>
      <input name="id" type="number" minvalue="0" required placeholder="ID"/>
      <label>TITLE</label>
      <input name="title" type="text" required placeholder="Title"/>
      <label>STATUS</label>
      <select name="completed" required>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <button>Add Todo</button>
    </form>
  )
}

const formStyle= {
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
  width: "30%",
  marginTop: 10
}