import React from 'react'

export default function TodoList(props) {
  return (
    <div>
      <ul>

        {
          props.Data.length >0 ? props.Data.map((item, index)=>{
            return < li key={index}>{item} 

            <button style={{color:"red"}} onClick={()=>props.deleteTodo(item, index)}> Del</button>
            
            </li>
          }) : <li style={{color:"red"}}>there is no todo here</li>
        }
        
        
      </ul>
    </div>
  )
}
