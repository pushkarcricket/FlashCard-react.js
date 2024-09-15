import React from 'react'

export default function Contact() {
  return (
    <div>
        <h1>Contact us</h1>
        <form action="form" className='login-form'>
            <div>
                <label htmlFor="Name">Name</label>
                <input type="text" placeholder='name' />
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <input type="text"  placeholder='Email'/>
            </div>
            <div>
                <label htmlFor="Number">Number</label>
                <input type="number"  placeholder='Number'/>
            </div>
            <div>

                <label htmlFor="address">Address</label>
                <textarea name="text" id="text"></textarea>
            </div>
            <button>submit
            </button>
            <div>
                
                
            </div>

        </form>
    </div>
  )
}
