import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../Store'

function List() {

     const todos=useSelector((store)=>store.todos);
     console.log(todos)


     const dispatch =useDispatch()

     const deleteButton=(todo)=>{

        console.log("i am fired")

        console.log(todo)

     

    
    dispatch({
        type:"DELETE_TODO",
        payload:todo
    })
}
  return (
    <div>
        <ul className="list-group">
            {
                todos.length >0 ? todos.map((todo,index)=>{
                    return <li key={index} className="list-group-item">{todo}

                    <button className='mx-4' onClick={()=>deleteButton(todo)}>Del</button>
                    
                    
                    
                    
                    </li>

                }) : <li className="list-group-item">No tods are here</li>
            }
</ul>
    </div>
  )
}

export default List