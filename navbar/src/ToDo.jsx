import React from 'react'

export default function ToDo(todoitems) {

    const todoItem=[{
        name:"buy milk",
        dueDate:"4/7/2024"
    },
    {
        name:" buy some another thing",
        dueDate:"5/7/2024"
    },
    {
        name:"hello world",
        dueDate:"right now"
    }




]
  return (
    <div>
        <h1>Todo App</h1>
        <input type="text" placeholder='enter your todo' />
        <input type="Date"  placeholder=''/>
        <div>
        <button style={{backgroundColor:"green"}}>Add</button>
        </div>
        <div>
        <button style={{backgroundColor:"red"}}>Delete</button> 
        </div>
        <div>
        <button style={{backgroundColor:"brown"}}>Delete2</button>
        </div>




    </div>
  )
}
