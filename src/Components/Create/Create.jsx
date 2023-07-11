import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../Store/FireBaseContext';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
const Create = () => {

  const { db, storage } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date().toDateString()
  const handleSubmit = (e) => {
    e.preventDefault();   
     console.log("dafjdh");
    const storageRef = ref(storage, '/Images/' + image.name)
    uploadBytes(storageRef, image).then((reference) => {
      getDownloadURL(reference.ref).then((url) => {
        addDoc(collection(db, 'products'), {
          name: name,
          category: category,
          price: price,
          url: url,
          userId: user.uid,
          createdAt: date
        }).then(() => {
          navigate('/')
        })
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => { setCategory(e.target.value) }}
           
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input" type="number" value={price} onChange={(e) => setPrice(e.target.value)} id="fname" name="Price" />
          <br />

          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

          <br />
          <input onChange={(e) => {
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>

        </div>
      </>
    </Fragment>
  );
};

export default Create;