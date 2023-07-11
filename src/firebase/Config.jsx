import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN4X5D0bukag2w-l9HCvj0ztkcgb5gC84",
  authDomain: "olx-clone-235c7.firebaseapp.com",
  projectId: "olx-clone-235c7",
  storageBucket: "olx-clone-235c7.appspot.com",
  messagingSenderId: "218638506846",
  appId: "1:218638506846:web:02c5ce39512ed14486cdcf",
  measurementId: "G-TRJ1PFVGZX"
}
export const Firebase = initializeApp(firebaseConfig)
export const db = getFirestore(Firebase)
export const auth = getAuth(Firebase)
export const storage=getStorage(Firebase)




