import React from 'react'


export default function Map(props) {

    // let food=["rice","milk","pluse","wheat","water"]
  return (
    <div>
        <h1>Food items</h1>

        <ul>
            <li>{props.item}</li>


        </ul>
        {/* {food.lenght ===0 && <h3>i am hungry</h3>}
        <ul>
            {food.map((item)=>{
               return <li key={item}>{item}</li>
                
            })} */}



       
    </div>
  )
}

