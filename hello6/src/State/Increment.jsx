import React, { useState } from 'react'

export default function Increment() {

    const [count, setcount]=useState(0)

    const incre= ()=>{
        setcount(count+1);
    }
  return (
    <div>
        <p>increment: 0</p>
        <button onclick={incre}> increment</button>
    </div>
  )
}
