import React, { useState } from 'react'

export default function TodoComponent(props) {

  console.log("this is the value of props in data",props)

  const[todo, setTodo]=useState("")


  const ValueInput=(event)=>{
    console.log(event.target.value)
    setTodo(event.target.value)
  }

  const submitInput=()=>{
    if(props.inputValue.length > 0){
      props.inputValue(todo)
    }
  }
  return (
    <div>
        <input type="text" placeholder='enter your todo here'

        onChange={ValueInput}
        
        />
        <button onClick={submitInput}>Add</button>
    </div>
  )
}
