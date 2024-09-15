
import { createContext, useContext } from 'react'
import './App.css'

// import { useCallback } from 'react';
const firstName= createContext()
const lastName=createContext()
function App() {
  return (
    <>

    {/* <firstName.Provider value="rahul">
      <lastName.Provider value="raj21">
        <Page/>
      </lastName.Provider>

    </firstName.Provider>
     */}
    </>
  )
}

export default App
export{firstName, lastName}