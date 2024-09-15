import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { todoprovider } from './Component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <todoprovider>

    <App />
    </todoprovider>
    
  </StrictMode>,
)
