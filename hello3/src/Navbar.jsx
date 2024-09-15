import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className='nav'>
            <div>
                <h1>Nav-logo</h1>
            </div>
            <div>
                <input type="text"  placeholder='serach here'/>
            </div>
            <div className='Links'>
              <ul>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/Contact'>
                    Contact
                  </Link>
                
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
                
            </div>
        </nav>

    </div>
  )
}
