import React, { useContext } from 'react'

import { toggelcontext } from './App2'

export default function List() {


    const {Data}=useContext(toggelcontext)

    
  return (
    <div>

        
         <ul>

            {
               Data.map((item , index)=>{
                return <li key={index}>{item}</li>
               })
            }
           
           
        </ul>

        
    </div>
  )
}
