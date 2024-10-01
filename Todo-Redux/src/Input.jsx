import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Input() {

    const [todo,setTodo]=useState("")

    const[error, seterror]=useState(false)

    const inputValue=(event)=>{
        console.log(event.target.value)

        if(todo.length >0){
            seterror(false)
        }else{
            seterror(true)
        }
    
            setTodo(event.target.value)
        

        console.log("input todo value",todo)
    }
    const dispatch=useDispatch();

    const submitButton=()=>{
        console.log("submit is fired");

        if(todo.length>0){
            dispatch({
                type:"ADD_TODO",
                payload:todo
    
            })

        }else{
            seterror(true);
        }

        setTodo("")
       
    }

   
    
  return (
    <div>
        <input type="text"
        
        placeholder='enter your todo here'

        onChange={inputValue}

        value={todo}
        
        />
        <button onClick={submitButton}>Add</button>

         
          
        { error && <p style={{color:"red"}}>please enter someything</p>}
    </div>
  )
}
