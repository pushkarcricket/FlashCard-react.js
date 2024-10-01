
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'
import UserProvider from './contex/UserProvider'

function App() {
  

  return (
    < UserProvider>
    <Login/>
    <Profile/>
      
      
    </UserProvider>
  )
}

export default App
