import React, { useState } from 'react'
import UserContext from './UserContext'

   const UserProvider=({children}) =>{

    const[user,setuser]=useState(null)
  return (
    <div>

       <UserContext.Provider value={{user,setuser}}>
       {children}
 


       </UserContext.Provider>

       

    </div>
  )
}

export default UserProvider
