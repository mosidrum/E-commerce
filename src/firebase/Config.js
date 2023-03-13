import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyDUUi3RFaoqoH5p41UpciPWoBO2AORU-yQ",
  authDomain: "ebuy-52f1a.firebaseapp.com",
  projectId: "ebuy-52f1a",
  storageBucket: "ebuy-52f1a.appspot.com",
  messagingSenderId: "746429241161",
  appId: "1:746429241161:web:79df868d07a5f2b2db2c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore (app);
export const storage = getStorage (app);