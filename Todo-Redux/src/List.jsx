
import React from 'react'
import store from './Store/Store'
import { useSelector } from 'react-redux'

export default function List() {
   const todos=useSelector((state)=>state.todos)
  return (
    <div>
        <ul>

            {
                todos.length >0 ? todos.map((todo, index)=>{
                    return <li key={index}>{todo}
                    
                     <div>
                        <button  >Del</button >
                        </div>
                        
                        </li>
                }) : <li>there is no todo are here </li>
            }
            
            
        </ul>
    </div>
  )
}
