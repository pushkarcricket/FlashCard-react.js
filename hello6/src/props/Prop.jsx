import React from 'react'

export default function Prop( prop , fun) {

    fun.a(5)
  return (
    <div>
        <h1>hello world{prop.name  }</h1>
        <h2> this is my age {prop.age}</h2>
    </div>
  )
}
