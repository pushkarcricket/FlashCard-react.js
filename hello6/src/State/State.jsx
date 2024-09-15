import React, { useEffect, useState } from 'react'

export default function State() {

  // const [count, setCount
  // ]=useState(0)

  const fun=()=>{
    setCount(count+1);
  }
 //useEffect witn noi depemcy

//  useEffect(()=>{
//   console.log("you have re-reendered");
  
//  });
 //useEffect with depemency its work with array

//  useEffect(()=>{
// console.log("hello world");



//  },[count])

 // useEffect with one dependency 

 useEffect(()=>{
  console.log("hello world");
  

 },[])


  return (
    <div>
        <h1>Increment</h1>
        <p>Increment:{count}</p>
        <button onClick={fun}>ADD</button>
    </div>
  )
}
