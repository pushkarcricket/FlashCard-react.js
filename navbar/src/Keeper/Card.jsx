import React, { useState } from 'react'



export default function Card(props) {

  setInterval(timeNew,1000)
      const[color, setcolor]=useState("")
      const[count, setcount]=useState(0)
      const[counters, setcounters]=useState(0)
      const[timer,settimer]=useState()

      const run=()=>{
        setcolor("white")

      }
      const counter=()=>{
        setcount(count +1)
        console.log("is fired")
      }

      let time= new Date().toLocaleTimeString();
      console.log(time);

     
      const timeNew=()=>{
        const newTime=new Date().toLocaleTimeString();
        settimer(newTime)
      }
  return (
    <div  className = "grid gap-3"style={{
        backgroundColor:"red"
    }}>
       
        <h2 className="p-2 g-col-6">{props.name}</h2>
        <h3 className='p-2 g-col-6'>{props.number}</h3>
        <p className='p-2 g-col-6'>{props.email}</p>
        <h1>my fav color is {color}</h1>
        <button onClick={run}>change the color</button>
        <p>increment:{count}</p>
        <button onClick={()=>{
            setcount(count +1)
        }}>count</button>
        

        <h1>{counters}</h1>
        <button onClick={()=>{
          setcounters(counters+1)
        }}>+++++</button>
        <button onClick={()=>{
          setcounters(counters-1)
        }}>----</button>

        <h1>{timer}</h1>
        <button onClick={timeNew}>Time</button>
        

    </div>
  )
}
