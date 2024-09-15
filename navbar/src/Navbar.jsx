import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
        <h1>welcome here</h1>
        <div>
            <input type="text" placeholder='search here' />

        </div>
        <div className='link'>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                    
                </li>
                <li>
                <Link to='/content'>content</Link>
                </li>
                <li>
                    
                <Link to="/about">About</Link>

                </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}
