import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Login Form</h1>
        <div>
            <label htmlFor="text">First Name</label>
            <input type="text"  placeholder='first name'/>
        </div>
        <div>
            <label htmlFor="text">Last Name</label>
            <input type="text"  placeholder='last name'/>
        </div>
        <div>
            <label htmlFor="text">Email</label>
            <input type="email" placeholder='email' />
        </div>
        <div>
            <label htmlFor="text">Password</label>
            <input type="password"  placeholder='password'/>
        </div>
        <button>Submit</button>
    </div>
  )
}
