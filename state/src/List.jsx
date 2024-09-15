import React from 'react'

export default function List(props) {
    console.log(props)
  return (
    <div>
      <form >
      <ul>
            {
                props.todos.length>0 ? props.todos.map((value,index,array)=>{
                    return <li key={index}>{value}</li>
                    
                }
            ): <li> no todo found</li> 
            }


        
      </ul>
      </form>
         
    </div>
  )
}
