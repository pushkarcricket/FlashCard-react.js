import React, { useState } from 'react'

export default function Counter() {

    const[step,setStep]=useState(1)
    const[count,setCount]=useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count)


    const handleCount=()=>{
        setCount(count + step)
    }

    const handleCount2=()=>{
        setCount(count - step)
    }

    const handleStep=()=>{
        setStep(step+1)
    }

    const handleStep2=()=>{
        setStep(step-1)
    }

    const handleReset=()=>{
        setStep("");
        setCount("")
    }
  return (
    <div>
        <h1> Welcome here</h1>

        <input type="range" min={1} max={10}  value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
        <div>
        <button onClick={handleStep2} >-</button>
        {/* <input type='text' value={count} onChange={(e)=>setCount(Number(e.target.value))}/> */}

           <span><p>Step : {step}</p></span> 
           

            <button onClick={handleStep}>+</button>
        </div>
        <div>
        <button onClick={handleCount2}>-</button>
            <span>

            <p>Count : {count}</p>
            </span>


           <div>


           </div>
            
            
            
        </div>

        {
            count !== 0 || step !==1 ?(<div >
                <button onClick={handleReset}>Reset</button>
                </div>

            ):null
        }



       

        
<p>

<span>
            {count === 0 ? "Today is" : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was`}
        </span>

        <span> {date.toDateString()}</span>


</p>
        
       

    
    </div>
  )
}
