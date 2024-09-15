
import { useEffect, useState } from 'react';
import './App.css';




import Navbar from './project/Navbar';
import Data from './project/Data';

import Props3 from './props/Props3';
import New from './props/New';
import Prop from './props/Prop';
import Increment from './State/Increment';
import Decrement from './State/Decrement';





function App() {
  

  // const song=[
  //   {image:"https://images.unsplash.com/photo-1506875644286-0fa3dc4df91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",name:"Baby",artist:"justin",added: false},
  //   {image:"https://images.unsplash.com/photo-1520966523720-2569d0357923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",name:"together",artist:"akon",added: false},
  //   {image:"https://images.unsplash.com/photo-1525115450806-c4b70fd049bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",name:"rangdaari",artist:"arjit",added: false},
  //   {image:"https://images.unsplash.com/photo-1432538501018-e71b8a676975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D",name:"india",artist:"singh",added: false}
  // ]

  // const[songData, SetsongData]=useState(song);

  // const handleclick=(index)=>{
  //   SetsongData((prev)=>{
  //     return prev.map((item, itemindex)=>{
  //       if(itemindex === index){
  //         return {...item, added: !item.added}
  //         return item;
  //       }
  //     })
  //   })
   
  // }
  // const run=(a)=>{
  //   console.log(a);
  const [count, setcount]= useState(0);

  }
  
  
  return (
    <div >
     
     
     {/* <Navbar/>
     <div className='px-20 flex gap-10 mt-8 flex-wrap'>
    {songData.map((obj,index)=>{
      return <Data song={obj} handleclick={handleclick} index={index}/>
    })} */}


     {/* </div> */}
     
     
     
     {/* <Props3 fun={run}/> */}

     <New/>
     {/* <Prop name="pushkar kumar" age="27"  fun={run}/> */}
     <Increment fun={setcount ,count}/>
     <Decrement raj={setcount, count}/>
    
    

    </div>
  );
}

export default App;
