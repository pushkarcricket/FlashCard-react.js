import React, { useState } from 'react'
import UserInput from './UserInput'
import List from './List'

export default function App2() {

    const [Data, setData]=useState(["breakfast","lunch", "dinner"]);
    const[editTodo, seteditTodo]=useState({
        index: "",
        value:""
    })


    const input=(value)=>{
        setData([...Data, value])
    }

    const deleteTodo=(index, value)=>{
        console.log("delete button is fired", index)

        Data.splice(index, 1);
        setData([...Data]);
    }

    const editValue=(value, index)=>{
        console.log("the value of edit",index, value);
        seteditTodo({index, value})
    }

    const updateTodo=()=>{
        console.log("update todo is fired")
    }
  return (
    <div>
        <h1 style={{color:"yellowgreen"}}> this is my todo app using react </h1>

        <UserInput input={input} updateTodo={updateTodo}/>
        <List Data={Data} deleteTodo={deleteTodo} editValue={editValue}/>

       
        


    </div>
  )
}
