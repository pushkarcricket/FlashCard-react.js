import React, { useState } from 'react'

export default function Add() {

    const [count, SetCount]=useState(0);

    const handleclick=()=>{
        SetCount(count +1);
    }
  return (
    <div>
        <p>increemnt : {count}</p>
        <button onClick={handleclick}>Increment</button>
    </div>
  )
}
