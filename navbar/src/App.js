import logo from './logo.svg';
import './App.css';


import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from'./Login';
import Content from './Content';
import About from './About';
import Navbar from './Navbar';
import './nav.css'

import Card from './Keeper/Card';
import Card2 from './Keeper/Card2';
import Car from './Keeper/Car';
import Animal from './destructure/Animal';
import Prop from './Prop';


import App1 from './Calculator/App1';
import Main from './ToDo/Main'

import Map from './Keeper/Map';
function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* //<Route path='/Home' element={<Home/>}/> */}
        {/* <Route path='/Login'element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      
      </BrowserRouter> */}
       {/* <h1 style={{backgroundColor:"yellow"}}> my Contact</h1>
      <Card name=" pushkar kumar" number="number 9110024993" email="bbdi@gmail.com" /> */}
      {/* <Card2 name=" my name is raj" number="number is 9890u5497" email="pk233391@gmail.com"/>
      <Car car="bmw" brand="luxury" />
      <Card name="sumit" number="this is 77898687" email="sumit@gmail.com"/>
      
       */}
       
       {/* <Card name=" rajesh kumar" number="number 9008964993" email="raj@gmail.com" /> */}

       {/* <Animal/> */}
      {/* <Prop name={"pushkar kumar"} email={"pk233391@gmail.com"}/> */}
      {/* <Map item="ghee" /> */}
      {/* <ToDo /> */}
      {/* <Main/> */}
      <Map/>

    </div>
  );
}

export default App;
