import React, { useState } from 'react'

export default function Decrement() {

    const[count, setcount]=useState(0)

    const drecre= ()=>{
        setcount(count-1)
    }
  return (
    <div>
        <p> decrement : {count}</p>
        <button onclick={drecre}> drement</button>
    </div>
  )
}
