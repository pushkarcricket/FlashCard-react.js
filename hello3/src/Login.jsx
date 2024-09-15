import React from 'react'
import './Login.css'


export default function Login() {
  return (
    <div>
      <h1>Login form</h1>
      <div>
        <form action="" className='login-form'>
          <div>
            <label htmlFor=" first name"> First Name</label>
            <input type="text" placeholder='first name' />
          </div>
          <div>
            <label htmlFor="last name">Last Name</label>
            <input type="text" placeholder='last name' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='email' />

          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" placeholder='password' />
          </div>
          <button>Enter</button>
        </form>
      </div>
    </div>
  )
}
