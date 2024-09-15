
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from './react'
import ReactDom from 'react-dom/client'
import Add from './State/Add';
import Increment from './State/Increment';
import Dcrement from './State/Dcrement';


function App() {
  return (
    <div>
      <Add/>
      <Increment/>
      <Dcrement/>
      
      
  

      
    </div>
  );
}

export default App;
