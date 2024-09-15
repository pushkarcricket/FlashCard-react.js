import React from 'react'

export default function List(props) {
  return (
    <div>
        <ul className='list-field'>

            {
                props.Data.length >0 ? props.Data.map((value, index)=>{
                    return <li key={index}>{value}

                    <button onClick={()=>props.deleteTodo(index)}>
                        Del
                    </button>

                    <button onClick={()=>props.editValue(value, index)}>
                        Edit
                    </button>
                    
                    
                    
                    </li>

                }) :  <li>no todo are here</li>
            }
            
           
        </ul>
    </div>
  )
}
