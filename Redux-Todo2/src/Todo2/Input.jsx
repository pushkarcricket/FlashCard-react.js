import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Input() {

    const[data,setData]=useState("")
    const[error,setError]=useState(true)

    const inputData=(event)=>{
        console.log(event.target.value)
        setData(event.target.value)

        if(event.target.value >0){

         
          setError(true)


        }else{
          setError(false)
        }
        
    }

    const dispatch=useDispatch()


    const submit=(event)=>{
        event.preventDefault();
        console.log("your button is fired")

        dispatch({
            type:"ADD_TODO",
            payload: data
        })
        // if(data.length >0){
        //     dispatch({
        //         type:"ADD_TODO",
        //         payload: data
        //     })

        // }

        if(data.length >0){
          setError(false)
        }else{
          setError(true)
        }
       setData("")
    }
  return (
    <div >
       <form onSubmit={submit}>
  <div className="mb-3">
    
    <input type="text" className="form-control" aria-describedby="emailHelp"

    onChange={inputData}

    value={data}

    />
    
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

{
  error && <p style={{color:"red"}}>add some todos </p>
}
    </div>
  )
}

export default Input