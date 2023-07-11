import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {  createUserWithEmailAndPassword, updateProfile,getAuth } from 'firebase/auth';
import { FirebaseContext } from '../../Store/FireBaseContext';
import { addDoc, collection } from 'firebase/firestore';
export default function Signup() {
    const [username, SetUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    
    const {auth} = useContext(FirebaseContext); 
    const {db} = useContext(FirebaseContext);

    const navigate=useNavigate()
   
          const navToLogin=(e)=>{
         e.preventDefault()
         navigate('/login')
          }
    const handleSubmit = (e) => {
        e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((result)=>{
    updateProfile(result.user,{displayName:username}).then(()=>{
      addDoc(collection(db,'users'),{
        id:result.user.uid,
        profileName:username,
        phone:phone
      }).then(()=>{ 
        navigate('/login')
      })
    })     
  })          
 };

    return (
        <div>
            <div className="signupParentDiv">
                <img width="200px" height="200px" src={Logo} alt="Logo"></img>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => SetUsername(e.target.value)}
                        id="fname"
                        name="name"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="fname"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input
                        className="input"
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="lname"
                        name="phone"
                        defaultValue="Doe"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="lname"
                        name="password"
                        defaultValue="Doe"
                    />
                    <br />
                    <br />
                    <button>Signup</button>
                </form>
                <a onClick={navToLogin}>Login</a>
            </div>
        </div>
    );
}
