import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjRVGB7eiAGQ7Tbox1d6FnbzsPQLCbK8g",
  authDomain: "ecommerce-57780.firebaseapp.com",
  projectId: "ecommerce-57780",
  storageBucket: "ecommerce-57780.appspot.com",
  messagingSenderId: "350377417069",
  appId: "1:350377417069:web:17c890d9bc3f78aead2264"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;