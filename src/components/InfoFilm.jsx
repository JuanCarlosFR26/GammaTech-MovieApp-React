import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

export const InfoFilm = () => {

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

    const { id } = useParams();

    const API_KEY = 'fde5b03f19e59a7c6409966ae2ae58e1';
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const API_IMAGE = 'https://image.tmdb.org/t/p/w200';
    const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query`;

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
        setMovies(data)
        })
    }, [])

    const myFavourite = async (data) => {

        // await setDoc(db, "Favourites", "Movies"), {
        //     name: data.title,
        //     id: data.id
        // }
        const movieRef = doc(db, "Favourites", "Movie-Favourite");
        await setDoc(movieRef, { Film: data.title }, { merge: true })
    }

  return (
    <div>
        {
            <div className='cardInfo'>
                <div className='frontPart'>
                    <h1>{movies && movies.title}</h1>
                    <img src={movies && API_IMAGE + movies.poster_path}></img>
                </div>
                <div className='backPart'>
                    <h2>Overview</h2>
                    <p>{movies && movies.overview}</p>
                    <h2>Géneros:</h2>
                    <div className='genres'>
                        {
                            movies && movies.genres.map((genre) => (
                                <p>{genre.name}</p>
                            ))
                        }
                    </div>
                    <h2>Año de estreno: {movies && movies.release_date}</h2>
                    <p>Duración: {movies && movies.runtime} minutos</p>
                    <h4>Dirigida por: </h4>
                    {
                        movies && movies.production_companies.map((director) => (
                            <p>{director.name}</p>
                        ))
                    }
                    <button onClick={() => myFavourite(movies && movies)} className='favourite'>Add To Favourite<i className="fa-solid fa-star"></i></button>
                </div>
            </div>
        }
    </div>
  )
}
