import React from 'react'

export default function Header(props) {
  return (
    <div>
      <h1 style={props.st}>{props.text}</h1>
      
    </div>
  )
}
