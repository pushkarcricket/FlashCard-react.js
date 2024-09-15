import React from 'react'
import './Run.css'

export default function Buttons() {

    const buttons=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']



  return (
    <div>
        <div className='btn-container'>

            {buttons.map((buttons)=>{
                return <button className='button'>{buttons}</button>
            })}
            
            {/* <button className='button'>C</button>
            <button className='button'>1</button>
            <button className='button'>2</button>
            <button className='button'>3</button>
            <button className='button'>4</button>
            <button className='button'>5</button>
            <button className='button'>6</button>
            <button className='button'>7</button>
            <button className='button'>8</button>
            <button className='button'>9</button>
            <button className='button'>0</button> */}

        </div>
    </div>
  )
}
