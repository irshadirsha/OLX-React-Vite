import React,{useEffect,useContext} from 'react'
import './App.css'
import Home from './Pages/Home';
import {BrowserRouter as Router, Route,Routes}  from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import { AuthContext } from './Store/FireBaseContext';
import Post from './Store/PostContext';
// import { auth } from "./Firebase/config";
import {auth} from './firebase/Config'
function App() {
  const { setUser } = useContext(AuthContext)
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser)
    })
  })
  return (
    
      <Router>
        <Post>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup'element={ <Signup />}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/view' element={<View/>}/>
        </Routes>
        </Post>
      </Router>
  
  )
}

export default App
