import React, { useContext, useState } from 'react'
import UserContext from '../contex/UserContext';

export default function Login() {

    const[userName,setuserName]=useState("");
    const[userPassword, setuserPassword]=useState("");

    const {setuser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        console.log("button is fired");
        e.preventDefault()
        setuser({userName, userPassword})

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        placeholder='username'

        value={userName}
        onChange={(event)=>setuserName(event.target.value)}
         />
         {"   "}
        <input type="number"
         placeholder='password'
         value={userPassword}
         onChange={(event)=>setuserPassword(event.target.value)}
         
         />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
