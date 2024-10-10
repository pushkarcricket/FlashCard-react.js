
import './App.css'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  {id:3 , description: "luggages", quantity: 2, packed: true},
  {id:4 , description: "clothes", quantity: 6, packed: true},
  {id:5 , description: "charger", quantity: 1, packed: true}

];

function App() {
  

  return (
    <>
     <div>
      <Logo/>
      <Form/>
      <PackingList initialItems={initialItems}/>
      <Stats/>
     </div>
    </>
  )
}

export default App
