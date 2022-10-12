import { useCallback, useState } from "react"
import { useDispatch } from 'react-redux'
import { todosActions } from "./featured/Todo/reducers"
export const Modify = props => {
  const [modify, setModify] = useState(false)
  const dispatch = useDispatch()
  const update = useCallback( (e) =>{
    e.preventDefault()
    dispatch(
     todosActions.update({
      id: e.target.elements[0].value,
      title: e.target.elements[1].value,
      completed: e.target.elements[2].value
    })
    )
    setModify(false)
}, [])
  return (
    <div>
     {!modify && <button onClick={() => setModify(true)}>Edit task</button>}
     { modify && <form onSubmit={update}>
       <input name="id" type="number" minvalue="0" required placeholder="ID" value={props.todo.id} readOnly/>
       <input name="title" type="text" required placeholder="Title" />
       <select name="completed" required>
         <option value={true}>Yes</option>
         <option value={false}>No</option>
       </select>
       <button>Modifica</button>
      </form>}
    </div>
  )
}