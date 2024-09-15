import React, { useEffect, useState } from 'react'

export default function UserInput(props) {

    console.log("this is the value of props",props)

    const[todo, settodo]=useState("");

    const[error, seterror]=useState(false);
    

    const inputValue=(event)=>{
        console.log(event.target.value )

       

        if(event.target.value.length > 0){
            // seterror(false)
            settodo(event.target.value);

        }else{
            seterror(true)
        }

        
    }

   
    console.log("this is the value of todo",todo);


    const submitValue=()=>{
       
        if(props.input.length > 0){
            props.input(todo)
            // seterror(false)


        }else{
            seterror(true)
        }

        if(todo.length >0){
            if(props.editValue.index !== 0){
                props.updateTodo(props.editValue.index, todo)
            }else{
                settodo(props.editValue.data)
                props.addTodo(todo)
            }
        }else{
            seterror(true)
        }

        settodo('')
    }
    useEffect(()=>{
        settodo(props.editValue.value)
    })


  return (
    <div>
         <input type="text"  placeholder='enter your todo here'

         onChange={inputValue}
         
         
         
         
         
         />

<button onClick={submitValue}> Add</button>

{
    error && <p style={{color : "red"}}>please add todo here</p>
}
    </div>
  )
}
