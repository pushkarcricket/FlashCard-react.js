import React, { Children, createContext, useState } from 'react'
import List from './List'
import InputField from './InputField'



const toggelcontext= createContext();

 const toggelProvider=({Children})=>{
    const [Data,setData]=useState(["breakfast", "lunch", "dinner"])

};


export default function App2() {
    
    

    

  return (
    <div>

        <toggelcontext.Provider value={Data}>

        
        <h1> hello </h1>

    {Children}




        <InputField/>

        <List/>
        </toggelcontext.Provider>

       


    </div>
  )
}
 export {toggelProvider, toggelcontext}