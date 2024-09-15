import { createContext, useState } from 'react'


import './App.css'
import TodoComponent from './TodoComponent'
import TodoList from './TodoList'

function App() {

  // const todoList=createContext();
  const [Data, setData]=useState(["breakfast", "lunch", "dinner"])


  const inputValue=(value)=>{

    setData([...Data, value])

  }

  const deleteTodo=(item,index)=>{

    console.log("the index of this element",index);
    Data.splice(index, 1);
    setData([...Data])

  }
  return (
    <>

    
<h1> enter your todo here</h1>
<TodoComponent inputValue={inputValue}/>
<TodoList Data={Data} deleteTodo={deleteTodo}/>
       
    </>
  )
}

export default App


