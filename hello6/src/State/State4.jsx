import React, { useState } from 'react'

export default function State4() {

    const[val, setVal]=useState(false)
  return (
    <div>
        <h1>{val === false ? "bahra jaoo":"stay away"}</h1>
        <button onClick={()=>{
            setVal(!val)
        }}>Change me </button>
    </div>
  )
}
