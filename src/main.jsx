import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import Context, { FirebaseContext } from './Store/FireBaseContext.jsx'
import { db,auth, storage } from './firebase/Config.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <FirebaseContext.Provider value={{db,auth,storage}}>
    <App />
    </FirebaseContext.Provider>
    </Context>
  </React.StrictMode>,
)
