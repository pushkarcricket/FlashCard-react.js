

import { useDispatch } from 'react-redux'
import './App.css'
import Component from './Component'

function App() {

  const dispatch =useDispatch();
  

  return (
    <>

    <Component/>
<button onClick={()=> dispatch({type:'INC'})}>Increment</button>
<button onClick={()=> dispatch({type:'DEC'})}>Decrement</button>
  

    
     
    </>
  )
}

export default App
