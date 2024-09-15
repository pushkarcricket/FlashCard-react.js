import React from 'react'
import { useState } from 'react'

export default function Counter(props) {
    const [count,setcount]=useState(0)
    // const run=()=>{
    //     setcount=count+1;
    //     console.log("is fired")

    // }
  return (
    <div>
        
        <h1>welcome to my react app</h1>
        <p>increment:{count}</p>
        <button onClick={()=>{
            setcount(count+1);
            console.log("i am fired")
        }}>increment</button>
        <h2>{props.name}</h2>
    </div>
  )
}
