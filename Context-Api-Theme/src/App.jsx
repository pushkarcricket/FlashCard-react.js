
import './App.css'


function App() {
  const products=[{
    title:"cabbage", isFruite: false, id:1
  },
  
  {
    title:"garlic", isFruite: false, id:2
  },
  {
    title:"apple", isFruite: true, id:3 
  }
  
  ];

// const listItems=products.map(product=>
//   <li
//   key={product.id}
//   style={{
//     color:product.isFruite ?"magenta" :"darkgreen"
//   }}
//   >
//     {product.title}
//   </li>
// )


  

  return (
  <>
  
  <ul>
    {
     products.map((item,index)=>(
      <li key={index} style={{ color:item.isFruite ?"red":"yellow"}}>{item.title}</li>
     ))
    }
  </ul>
  </>
  )
}

export default App
