import React, { useState } from 'react'

export default function Counter() {

    const [count, Setcount]=useState(0);

    const increment=()=>Setcount(count+1);
    const decrement=()=>{Setcount(count-1)}

  return (
    <div>
        <p>Increment:{count}</p>
        <button onClick={increment}>ADD</button>
        <button onClick={decrement}>Minus</button>
    </div>
  )
}
