
import './App.css'
import { useSelector } from 'react-redux'
import { incNumber } from './Actions'
import { decNumber } from './Actions'
import { useDispatch } from 'react-redux'
import {component} from './Reducer'


function App() {

  // const mystate=useSelector((state)=> state.changeTheNumbe)
  const dispatch= useDispatch();
 

  return (
    <>
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
    </div>
    <div>
      
       <button onClick={()=>dispatch(decNumber)}>-</button>

       {/* <p> 0 : {mystate}</p> */}
       {/* <input type="text" value={mystate} /> */}



    <button onClick={()=>dispatch(incNumber)}>+</button>
    </div>
      
    </>
  )
}

export default App
