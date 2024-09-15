import React from 'react'

export default function Content() {
  return (
    <div>
        <h1>hello world
        </h1>
        <div>
            <label htmlFor="text"> search here</label>
            <input type="text"  placeholder='search here'/>
        </div>
        <div>
            <label htmlFor="text"> Name of Content</label>
            <input type="text" placeholder='Name of Content' />
        </div>
        <button>Submit</button>
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="pic" />
    </div>
  )
}
