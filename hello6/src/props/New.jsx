import React, { useState } from 'react'

export default function New() {

    const[count, setCount]=useState(0);

    // const inc=()=>{
    //     setCount(count+1)

    // }
    const res=()=>{
        setCount(0)
    }
  return (
    <div>
        <p> counter : {count}</p>
        <button onClick={()=>{
            setCount(count+1)
        }}> increment</button>
        <button onClick={()=>{
            setCount(count-1)
        }}> drement</button>

        <button onClick={res}>reset</button>
    </div>
  )
}
