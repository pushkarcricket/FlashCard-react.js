import React from 'react'
import store from './store'
import { useSelector } from 'react-redux'

export default function List() {
    const todos=useSelector((store)=>store.todos);
    console.log(todos)
  return (
    <div>
        <ul>
            {
                todos.length>0 ? todos.map((todo,index)=>{
                    return <li key={index}>{todo}</li>
                }) : <li>no todos are here</li>
               
            }


      
      
      <li>third</li>
     </ul>
    </div>
  )
}
