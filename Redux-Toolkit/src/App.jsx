
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset } from './Features/CounterSlice';

function App() {

  const count=useSelector((state)=>state.counter.value)

  console.log("count", count);

  const dispatch=useDispatch();

  const handleIncrementClick=()=>{

    dispatch(increment())


  }

  const handleDrementClick=()=>{
    dispatch(decrement())

  }
  const handleResetClick=()=>{
    dispatch(reset())
  }

  return (
    <>
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <h1>Count:{count}</h1>
      <button onClick={handleDrementClick}>-</button>
      <button onClick={handleResetClick}>RESET</button>
    </div>
      
    </>
  )
}

export default App
