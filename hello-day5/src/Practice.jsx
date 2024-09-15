import React, { useEffect, useState } from 'react'

export default function Practice() {
    let[counter,setcounter]=useState(10)

    let increment=()=>{
        console.log("event is fired");
        setcounter(counter+1)
    }
    useEffect(()=>{
        console.log("i am work as a compoent didmount ");
    })
  return (
    <div>
        <h1> increment to do</h1>
        <p>Counter:{counter}</p>
        <button onClick={increment}>increment</button>
    </div>
  )
}
