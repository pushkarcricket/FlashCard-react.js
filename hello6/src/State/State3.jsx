import React, { useState } from 'react'

export default function State3() {

    const [change, setChange]=useState({name:"pushkar", isbanned:true});
    const [clr, Setclr]=useState("red")
    const fun=()=>{
        setChange({...change, isbanned:!change.isbanned} )
    }

    const run=()=>{
      Setclr( clr==="blue");
    }


  return (
    <div>

        <h1>name: {change.name}</h1>
        <h1>Isbanned: {change.isbanned.toString()}</h1>
        <button onClick={()=>{
          run();
          fun();
        }}  style={{backgroundColor:"red"}}>Change me</button>
    </div>
  )
}
