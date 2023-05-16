import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCM9dtfOwg7YX6a5VemEIqOkdakCcZt05k",
  authDomain: "movieapp-react-c5b17.firebaseapp.com",
  projectId: "movieapp-react-c5b17",
  storageBucket: "movieapp-react-c5b17.appspot.com",
  messagingSenderId: "767584296328",
  appId: "1:767584296328:web:423ca65a23eb8ec9706e3d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
