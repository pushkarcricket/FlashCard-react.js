   
  import React from'react' 
   export default function hello(){
    return(
        <div>
            <h1>About</h1>
            <div>
                <label htmlFor="text">Name</label>
                <input type="text" placeholder='Name' />
            </div>
            <div>
                <label htmlFor="text"> Father name</label>
                <input type="text"  placeholder='father name'/>
            </div>
            <div>
                <label htmlFor="text">Address</label>
                <input type="text"  placeholder='Address'/>
            </div>
            <div>
                <label htmlFor="number">Mobile Number</label>
                <input type="number"  placeholder='number'/>
            </div>
            <button>Submit</button>
            <img src="https://images.unsplash.com/photo-1633621412960-6df85eff8c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlfGVufDB8fDB8fHww" alt="photo" />
        </div>
    )
 }
 