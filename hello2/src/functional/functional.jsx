import React from 'react'

export default function functional() {
  let number=567;
  let fun =()=>{
    return "my name is pushkar kumar"
  }
  return (
    <div>
      <h1> this is my react programming{number}.{fun()}</h1>
    </div>
  )
}
