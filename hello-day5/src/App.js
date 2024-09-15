import logo from './logo.svg';
import './App.css';
import StateClass from './StateClass';
import Functional from './Functional';
import UseStateFun from './UseStateFun';
import Counter from './Counter';
import Main from './Todo/Main'


function App() {
  
  return (
    <div className="App">
      {/* <PropFun item={"this is purvi mehta fav kulfi "} descriptio={"this is made of milk"} price={25} btn={"click here to buy"}/> */}
      
      {/* <FunctionalLifecircle/> */}
      <Counter name={"my name is pushkar kumar"}/>
      <Main/>
    </div>
  );
}

export default App;
