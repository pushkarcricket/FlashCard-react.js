import React from 'react'
import { useSelector } from 'react-redux'

export default function Comp() {

    const count=useSelector(state => state)
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}
