import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'



import store from './Store/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Provider store={store}>

    <App />

    </Provider> */}

    {/* <Provider store={store1}>
      <App1/>
    </Provider> */}

    <Provider store={store}>

      <App/>
      

    </Provider>
    
  </StrictMode>,
)
