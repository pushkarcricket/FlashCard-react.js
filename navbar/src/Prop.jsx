import React, { useState } from 'react'



export default function Prop(props) {
    const[count, setcount]=useState(0)
    const[name, setname]=useState("")
    const[email, setemail]=useState("")
    // console.log(count)
    console.log(name)
    console.log(email)

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Name: ${name}, email:${email}`);


    }

    const food=["rice","milk","pluse","wheat","water"]
  return (
    <div>

        {/* <h1>counter : {count}</h1>
        <button onClick={()=>{
            setcount(count+1)
        }} > hello</button> */}
        {/* h1>
        <h2>this is my email id {props.email}</h2><h1> hello my name is {props.name}</ */}
        {/* <form on onSubmit={handleSubmit}>
            <label htmlFor="">name</label>
            <input type="text"
            value={name}
            onChange={(e)=>{
                setname(e.target.value)
            }}

            
            
            placeholder='enter your name' />
            <label htmlFor="">email</label>
            <input type="text"
            value={email} 
            onChange={(e)=>{
                setemail(e.target.value)
            }} */}
            
            
            {/* placeholder='enter your email' />

            <button>submit</button>



        </form> */}
        <h1>list of item</h1>
        <ul className='list-group'>
           {food.map((item)=>{
            <li key={item} className='list-group-item'>{item}</li>
           })}
            
        </ul>



    </div>
  )
}
 