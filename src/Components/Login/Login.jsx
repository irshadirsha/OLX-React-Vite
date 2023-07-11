import React,{useState,useContext} from 'react';
import { FirebaseContext,AuthContext } from '../../Store/FireBaseContext';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const {auth}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  
  const navToSingup=(e)=>{
    e.preventDefault()
    navigate('/Signup')
  }

  const handlelogin=(e)=>{
    e.preventDefault()
    try{
      signInWithEmailAndPassword(auth,email,password).then((userData)=>{
        console.log(userData.user.uid);
        navigate('/')
      }).catch((err)=>{
        if('auth/invalid-email'===err.code){
          console.log("error");
        }
        
      })
    }catch(err){
      
    }
  
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            name="email"
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={navToSingup}>Signup</a>
      </div>
    </div>
  );
}

export default Login;