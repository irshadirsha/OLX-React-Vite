import React,{useEffect,useState,useContext} from 'react';
import {   collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import './View.css';
import { PostContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/FireBaseContext';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(PostContext)
  const {db}=useContext(FirebaseContext )
  useEffect(()=>{
    console.log(postDetails);
    const userQuery=query(
      collection(db,'users'),where('id','==',postDetails.userId)
  )
  getDocs(userQuery).then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        setUserDetails(doc.data())
    })
})

  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.profileName}</p>
          <p>{userDetails.phone}</p>
        </div>}

      </div>
    </div>
  );
}
export default View