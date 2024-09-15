import React from 'react'

export default function Animal() {
    const animals=[
        {name:"cat", sound:"meow", food:{
            foodItem :2,
            water:3

        }},
        {name:"dog", sound:"woof", food:{
            foodItem:2,
            water:3
        }}

    ]

    const cars=[
        {name1:"bmw", speed:140},
        {name1:"suv",speed:130}
    ]

    const [bmw,suv]=cars



    const{name1,speed}=bmw
    console.log(speed);
    // console.log(animals)

    const [cat,dog]=animals
    console.log(cat);

    const {name,sound,food}=cat; 
    console.log(food)
  return (
    <div>
        <h1>hello world</h1>

    </div>
  )
}
