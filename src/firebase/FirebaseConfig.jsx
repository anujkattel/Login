import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBQwzfB72dmVXStPxSasVjT-I7-L0DFg8",
  authDomain: "sanimandu-e67df.firebaseapp.com",
  databaseURL: "https://sanimandu-e67df-default-rtdb.firebaseio.com",
  projectId: "sanimandu-e67df",
  storageBucket: "sanimandu-e67df.appspot.com",
  messagingSenderId: "165755782138",
  appId: "1:165755782138:web:0f782b57e0b83d63115a43",
  measurementId: "G-FW6N9N0QM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export { fireDB, auth };