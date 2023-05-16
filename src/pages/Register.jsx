import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export const Register = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

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

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('users').add({
      username: email,
      password: password
    })

    .then(() => {
      console.log('Usuario registrado')
    })
    .catch((error) => {
      console.error('Error al enviar el usuario')
    })

    setEmail('');
    setPassword('');
  }



  return (
    <div className='divForm'>
    <h2>Register Now!</h2>
      <form onSubmit={handleSubmit} className='formRegister'>
        <div>
          <label>Email: </label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' name='email' />
        </div>
        <div>
          <label>Password: </label>
          <input onChange={(e) => setPassword(e.target.value)} type='password' name='password' />
        </div>
        <input type='submit' value='Register'/>
    </form>
    </div>
  )
}
