import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWtIibYuUaRojVc8PWUzEEqfOIFk1IjpM",
  authDomain: "econfood-9aa79.firebaseapp.com",
  projectId: "econfood-9aa79",
  storageBucket: "econfood-9aa79.appspot.com",
  messagingSenderId: "902703176868",
  appId: "1:902703176868:web:737ee28c947121cc2b1a31",
  measurementId: "G-04FYVBPSVK",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default firebaseApp;
