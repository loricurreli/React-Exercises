import { useState } from "react";

export const ToDoList = (props) => {
    const initalValue = ['Go to the gym']
    const [data,setData] = useState(initalValue)
    let task= ''
    const change = (event) => { task = event.target.value
    console.log(task)}
    const click = () => setData(state => ([...state, task]));
    const reset = () => setData([])
    const toDelete = (event) =>{ 
      const partial = [...data]
      setData( partial.filter((item,i) => item!==event.target.value))
    }
          return (
            <>
                <ul>{props.render(data,toDelete)}</ul>
                <input type="text" name="task" value={data.task} onChange={change} />
                <button onClick={click}>New task</button>
                <button onClick={reset}>Reset</button>
            </>
        )
    }