// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCj7z4yQPRzCTWYhg3Td5UzL7m9ajh0pok",
  authDomain: "task-d6610.firebaseapp.com",
  projectId: "task-d6610",
  storageBucket: "task-d6610.appspot.com",
  messagingSenderId: "797547790499",
  appId: "1:797547790499:web:f27646e62066c7db8e3f16"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export  {db};