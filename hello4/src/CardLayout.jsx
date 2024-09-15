import React from 'react'
// let arr=[{
//     title: "lab3",
//     descriptio: "this is lab-3",
//     btnName: "view lab-3",

// },{
//     title:"lab4",
//     descriptio:"this is lab-4",
//     btnName:"view lab-4",

// },{
//     title:"lab2",
//     descriptio:"this is lab-2",
//     btnName:"view lab-2",
// },{
//     title:"lab1",
//     descriptio:"this is lab-1",
//     btnName:"view lab-1",
// }]
let handleClick=()=>{
    alert("button is clicked!");
};

export default function CardLayout({lab,descriptio,btnName,purchase}) {
    
  return (
    <div>
        {/* {
            arr.map(  (item,index)=>(
                <>
                    <h1>{item.title}</h1>
                    <p>{item.descriptio}</p>
                    <button>{item.btnName}</button>
                </>

            ))
        } */}
        
        <h2>{lab}</h2>
        <h3>{purchase}</h3>
        <p>{descriptio}</p>

        <button>{btnName}</button>


    </div>
  )
}
