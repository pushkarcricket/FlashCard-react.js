import React, { useState } from 'react'

export default function StateArray() {

    const [val, setVal]=useState(
        {name:"rahul",age:25},
        {name:"raj" , age:27

    }
    // {name:"pushkar", age:25}

    
)
  return (
    <div>
        {/* {val.map(item=><h1>{item}</h1>)}

        <button style={{backgroundColor:"blue", borderRadius:"10px"}}  onClick={()=>{
            setVal((val.filter((item, index)=>index !=val.length-1)))
        }}>Change</button> */}

        {/* {val.map(item=><h1>{item}</h1>)}

        <button onClick={()=>{
            setVal(()=>val.filter((index, item)=>  index != 6))
        }}>Change </button> */}

        {/* {
            val.map(item=> <h1>{item}</h1>)
        }

        <button  onClick={()=>setVal(()=>(val.filter)((index,item)=> index %2==0))}>Change</button> */}

        {/* Adding new item in array by using state */}

        {/* {val.map(item=><h1>{item}</h1>)}

        <button onClick={()=>{
            setVal([...val, 7,9])
        }}>Change</button> */}

        
        
    {/* {val.map(item=>
    <div>
    <h1>{item.name}</h1>
    <h2>{item.age}</h2>
    </div>
    
    )}


    {/* <button onClick={()=>{
        setVal(()=>val.map(item=>item.name==="pushkar" ? ({name:"pushakr", age:28, gender:"male"}) : item))
    }}>Add
    </button> */}

    {/* <button onClick={()=>{
        setVal([...val, item.name==="raj"])
    }}>Add</button> */} 

    {/* {val.map(item=> <h1>{item}</h1>)} */}
    {/* <button onClick={()=>setVal( ()=> (val.filter)((index,item)=>index%2==0))}>Change</button> */}

    {/* <button onClick={()=>setVal([...val, 12,14])}>Change me</button> */}
<h1>{val.name}</h1>
<h2>{val.age}</h2>
<button>Change me </button>

    


    </div>
  )
}
