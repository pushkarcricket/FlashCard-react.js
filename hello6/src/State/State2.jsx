import React, { useCallback, useState } from 'react'

export default function State2() {

    //  const[ban, setBan]=useState(true)

   const[val,setVal]=useState(12)
  return (
    <div>
        {/* <h1>
            {ban.toString()}</h1>

            <button onClick={()=>
                setBan(!ban)
            }>BAN karo</button> */}

            {/* <h1>{inc}</h1>
            <button onClick={()=>{
              setInc((prev)=>prev-1)
            }}>Change me</button>
            <button style={{backgroundColor:'red'}}  onClick={()=>setInc((prev)=>prev+2)}>Change me 1</button> */}

            <h1>{val}</h1>

            <button style={{backgroundColor:"yellow",borderRadius:"10px"}}  onClick={()=>{
              setVal((prev)=>prev+2)
            }} > increment</button>


            <button onClick={()=>{
              setVal((prev)=>prev-2)
            }}>  Decrement</button>


    </div>
  )
}
