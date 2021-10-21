// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZaILVSAwMKGw4brE-KVqpTcKD6LP1iZA",
  authDomain: "whatsapp-clone-26e8c.firebaseapp.com",
  projectId: "whatsapp-clone-26e8c",
  storageBucket: "whatsapp-clone-26e8c.appspot.com",
  messagingSenderId: "859645133910",
  appId: "1:859645133910:web:f930d41c8edc7471e127f7",
  measurementId: "G-8PW6Z90JKT"
}; 

  

  const firebaseApp =  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};

  export default db;