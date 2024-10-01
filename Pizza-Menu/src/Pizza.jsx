import React from 'react'

export default function Pizza({pizzaObj}) {
  console.log(pizzaObj)

  
  return (

    <li className='pizza'>
    
      <img src={pizzaObj.photoname}alt="pizza" />

      <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredient}</p>
      <span>{pizzaObj.price}</span>
      </div>
      
    
    </li>
  )
}
