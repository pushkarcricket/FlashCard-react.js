import React, { useEffect, useState } from 'react'

export default function FunctionalLifecircle() {
    let [counter1,setcounter1]=useState(0);
    let[counter2,setcounter2]=useState(0);

    let increment1=()=>{
        console.log("evnt is fired1");
        setcounter1(counter1+1)
    }
    let increment2=()=>{
        console.log("evnt is fired2")
        setcounter2(counter2+1)
    }
    useEffect(()=>{
        console.log("this is not using dependency");
    })
    useEffect(()=>{
        console.log("this is running with dependency counter 2");

    },[counter2])
  return (
    <div>
        <div>
            <h1> Functional component 1</h1>
            <p> increment1:{counter1}</p>
            <button onClick={increment1} style={{color: "red", backgroundColor:"green"}}>increment1</button>
        </div>
        <div>
            <h1>Functional component 2</h1>
            <p> increment2:{counter2}</p>
            <button onClick={increment2}>increment2</button>
        </div>
    </div>
  )
}
