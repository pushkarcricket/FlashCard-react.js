import React from 'react'

export default function Props3(a) {
    console.log(a)
    const data1=a.fun(10)
  return (
    <div>
        <h1>heloo world{data1}</h1>
    </div>
  )
}
