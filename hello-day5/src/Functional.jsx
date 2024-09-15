import React, { useState } from 'react'

export default function Functional() {
    let [counter,setcounter]=useState[0]

const increment=()=>{
        console.log("increment is fire");
        setcounter={counter}

    }
  return (
    <div>
        <h1>Increment app using functional component</h1>
        <p> conter:</p>
        <button onClick={increment}>Click</button>


    </div>
  )
}
