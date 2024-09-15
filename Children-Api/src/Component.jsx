


import React, {createContext, useState} from 'react'

const Taskcontext=createcontext();
const Todoprovider=({Children})=>{
  const [todo, settodo]=useState(["breakfast","lunch", "dinner"]);

  const addtodo=(value)=>{
    settodo([...todo,value])
  }


const removetodo=(index)=>{
  const newtodo=[...todo];
  newtodo.splice(index,1);
  settodo(newtodo);
}

return (
  <taskcontext.Provider value={{todo,addtodo,removetodo}}>
    {Children}
  </taskcontext.Provider>
)

}
export {todoprovider, taskcontext}