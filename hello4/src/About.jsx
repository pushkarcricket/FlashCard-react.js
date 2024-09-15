import React from 'react'

export default function About() {
  return (
    <div className='home'>
      <div className='body'>
        <h1>My self</h1>
        <div >
            <label htmlFor="">Card Number</label>
            <input type="text" placeholder='Enter your cardnumber' />
        </div>
        <div>
            <label htmlFor="text"> Full Name</label>
            <input type="text"  placeholder='Enter your name'/>
        </div>
        <div>
          <label htmlFor="text">Expiration date</label>
          <input type="number"  placeholder='Month'/>
          <input type="number" placeholder='year' />
        </div>
        <div>
          <label htmlFor="number">CVV</label>
          <input type="number" placeholder='' />
        </div>
        <button>Submit</button>
    </div>
    </div>
  )
}
