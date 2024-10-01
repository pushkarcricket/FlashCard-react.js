import React from 'react'
import Pizza from './Pizza'

export default function Menu() {

  const pizzaData=[
    {name:'pizza 1' ,
        ingredient:"tomato, mozilla, cheese, spanich",
        photoName:"public/images/pizza1.jpg",
        price:"10" },
        {
          name:'pizza 2', ingredient:'tomato, patato,cheese, ', price:"20",

        photoName:"public/images/pizza2.jpg"
        

        },
        {
          name:'pizza 3', ingredient:'tomato, paneer,cheese, ', price:"20",

photoName:"public/images/pizza3.jpg"
        },
        {
          name:'pizza 4', ingredient:'tomato, paneer,cheese, ', price:"20",

photoName:"public/images/pizza4.jpg"


        },
        {
          name:'pizza 5', ingredient:'tomato, marshmellow,cheese, capsikam ', price:"20",

          photoName:"public/images/pizza5.jpg"
          
        },
        {
           name:'pizza 6', ingredient:'tomato, marshmellow,cheese, capsikam ', price:"20",

photoName:"public/images/pizza6.jpg"
        },
    
  ]
  return (
    
    
        <main className='menu'>
        <h2> Our Menu</h2>
        <>

        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas"> 
          {pizzaData.map((pizza,index)=>(<Pizza key={index} pizzaObj={pizza}/>))}

          </ul>
          </>

          </main>
          
        
    
        
    
  )
}
