import React from 'react'

export default function Car(props) {
  return (
    <div>
        <h1>my car name is {props.car}</h1>
        <p>the brand name is {props.brand}</p>
    </div>
  )
}
