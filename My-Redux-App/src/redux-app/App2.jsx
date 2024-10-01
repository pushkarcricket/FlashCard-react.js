import React from 'react'
import { useDispatch } from 'react-redux'
import Comp from './Comp';

export default function App2() {

    const dispatch=useDispatch();
  return (
    <div>

        <Comp></Comp>

        <button onClick={()=>dispatch({type :'INC'})}>increment</button>
        <button onClick={()=>dispatch({type: 'DEC'})}>decrement</button>

    </div>
  )
}
