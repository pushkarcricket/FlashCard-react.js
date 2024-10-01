import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import Store1 from './Store1.js'
import App2 from './redux-app/App2.jsx'
import App3 from './Redux/App3.jsx'
// import { store } from './store.js'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Provider store={Store1}>

      {/* <App2/> */}
    <App3></App3>

   

      
    {/* <App /> */}
    
  </StrictMode>,
)
