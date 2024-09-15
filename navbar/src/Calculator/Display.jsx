import React from 'react'
import './Run.css'
import Buttons from './Buttons'

export default function Display() {
  return (
    <div>
        <div className='cal'>
        <input  className="display" type="text" />
        <Buttons/>
    </div>
    </div>
  )
}
