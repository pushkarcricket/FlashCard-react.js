import React, { useState } from 'react'

export default function UseStateFun() {

    const [counter,setcounter]=useState(0);
    const increment=()=>{

        setcounter=(counter+1)
        console.log("evrnt is fire")
      }
      // const decrement=()=>{
      //   setcounter=(counter-1)
      //   console.log("event is fire ")
      // }
  return (
    <div>
        <h1>this is use of useState</h1>
        <p>counter:0</p>
        <button onClick={increment}>Click me+</button>
        {/* <button onClick={decrement}> click me-</button> */}
    </div>
  )
}
