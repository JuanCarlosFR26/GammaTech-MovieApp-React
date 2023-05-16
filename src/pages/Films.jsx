import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/style.css'

const Films = () => {

    const [genres, setGenres] = useState(null);
    const [genre, setGenre] = useState(null);
    const [movie, setMovie] = useState(null);
    

    const API_KEY = 'fde5b03f19e59a7c6409966ae2ae58e1';
    const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
    const API_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    const API_IMAGE = 'https://image.tmdb.org/t/p/w200';


    useEffect(() => {
        fetch(API_GENRES)
        .then((res) => res.json())
        .then(data => {
            setGenres(data)
        })
    }, [])

    const bringGenre = (genre) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`)
        .then((res) => res.json())
        .then(data => {
            setGenre(data.results);
        })
    }

    const handleFilm = (id) => {
        setMovie(id);
    }



    console.log(genre);

    return (
        <div className="homePage">
          <div className="formDiv">
            <h1>Search For Genre</h1>
            <div>
                <div className="buttonGenre">
                    {
                        genres && genres.genres.map((genre, i) => (
                            <button key={i} onClick={() => bringGenre(genre.id)}>{genre.name}</button>
                        ))
                    }
                </div>
            </div>
          </div>
          <div className="filmsPage">
            {
                genre && genre.map((film) => (
                    <div className="cardPopular" key={film.id}>
                        <h3>{film.title}</h3>
                        <img src={API_IMAGE+film.poster_path} alt={film.title}></img>
                        <button onClick={()=> handleFilm(film.id)} className="btnHome">
                            <Link to={`/${film.id}`}>See more</Link>
                        </button>
                    </div>
                ))
            }
          </div>
        </div>
    )
}

export default Films;