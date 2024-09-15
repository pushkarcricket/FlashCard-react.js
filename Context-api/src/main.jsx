import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './TodoApi/App2.jsx'
import { toggelProvider } from './TodoApi/App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <toggelProvider>
   <App2/>

   </toggelProvider>
    {/* <App /> */}

   
    
  </StrictMode>,
)
