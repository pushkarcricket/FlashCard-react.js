import React, { useState } from 'react'
import {formik ,Field,ErrorMessage,Form} from "formik"


export default function CreateUser() {
   const[name,setName]=useState("")

  return (
    <div>
      <form >
        <label htmlFor="">Name</label>
        <input type="text" 
         value={name}
         onChange={(e) => setName(e.target.value)}
        placeholder='enter your name' />

        <label htmlFor="">Email</label>
        <input type="email" 
        placeholder='enter your email'
        value={Email}
        onChange={(e)=> setName(e.target.value)

        }

         />

        <label htmlFor="">Number</label>
        <input type="number" 
        placeholder='enter your number'
        value={Number} 
        onChange={(e)=>
          setName(e.target.value)
        }

        
        />

        <label htmlFor="">LoginId</label>
        <input type="text" placeholder='enter your id'
        value={LoginId}
        onChange={(e)=> setName (e.target.value)}



         />

        <label htmlFor="">Password</label>
        <input type="password" placeholder='enter your password'
        value={Password}
        onChange={(e)=> setName(e.target.value)}
        
        />

        <button>Submit</button>
      

      </form>
        

      

        
    </div>
  )
}
