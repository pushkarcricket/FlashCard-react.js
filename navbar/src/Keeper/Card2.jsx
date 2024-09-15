import React from 'react'

export default function Card2(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h4>{props.email}</h4>
        <p> {props.number}</p>


    </div>
  )
}
