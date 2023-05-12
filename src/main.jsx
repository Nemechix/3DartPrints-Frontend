import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContextProvider from './Context/appContext.jsx'
import { LoginContextProvider } from './Context/loginContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
)
