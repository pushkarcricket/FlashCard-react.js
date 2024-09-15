import React from 'react'
import { useState } from 'react'

export default function RunTodo() {
    let[todo,settodo]=useState("");

    const add=()=>{
      console.log("i am fired")
    }


    const changeInput=(event)=>{
        console.log("input is fired");
        console.log(event.target.value);
        settodo(event.target.value)

    }

    const submitForm=(event)=>{
        event.preventDefault();
        console.log("submit button is fired");
    }
  return (
    <div>
        <form onSubmit={submitForm} >
        <h2>Enter items</h2>
        <input type="text" 
        placeholder='enter your todo'
        onChange={changeInput}
        
        />
        </form>
        
        <button onClick={add.value}  >Add</button>
        <p className='text-danger'>error whle doing this!</p>
    </div>
  )
}
