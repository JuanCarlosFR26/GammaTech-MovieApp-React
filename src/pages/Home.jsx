import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchedFilm from "../components/SearchedFilm";

const API_KEY = "fde5b03f19e59a7c6409966ae2ae58e1";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const API_IMAGE = "https://image.tmdb.org/t/p/w200";
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [bdFilm, setBDFilm] = useState(null);
  const [searchedFilm, setSearchedFilm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleFilm = (id) => {
    setMovie(id);
  };

  const changeFilm = (e) => setSearchedFilm(e.target.value);

  const searchFilm = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedFilm}`;
    const res = await fetch(url);
    const data = await res.json();
    setBDFilm(data.results);
    console.log(bdFilm);
  };

  return (
    <div className="homePage">
      <div className="formDiv">
        <h1>MovieReact App</h1>
        <form onSubmit={searchFilm}>
          <label htmlFor="film">Buscar película: </label>
          <input onChange={changeFilm} type="text" name="film" />
          <input type="submit" value={"Buscar"} />
        </form>
      </div>
      {bdFilm ? <h2>Your Results:</h2> : <h2>Most Popular</h2>}
      <div className="moviesWrapperHome">
        {bdFilm
          ? bdFilm.map((film) => (
              <SearchedFilm
                id={film.id}
                title={film.title}
                img={API_IMAGE + film.poster_path}
              />
            ))
          : movies.map((moviesReq) => (
              <div className="cardPopular" key={moviesReq.id}>
                <h3>{moviesReq.title}</h3>
                <img
                  src={API_IMAGE + moviesReq.poster_path}
                  alt={moviesReq.title}
                ></img>
                <button
                  onClick={() => handleFilm(moviesReq.id)}
                  className="btnHome"
                >
                  <Link to={`/${moviesReq.id}`}>See more</Link>
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
