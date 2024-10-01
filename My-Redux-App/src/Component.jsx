import React from 'react'
import { useSelector } from 'react-redux'

export default function Component() {

    const count=useSelector(state=>  state)
  return (
    <div>

        <h1>{count}</h1>
    </div>
  )
}


