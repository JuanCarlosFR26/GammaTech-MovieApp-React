import { Link, useParams } from "react-router-dom";

const SearchedFilm = ({ title, img, handleFilm, id }) => {

  return (
    <>
      <div className="cardInfoSearched">
        <h1>{title}</h1>
        <img src={img}></img>
        <button className="btnSearch" onClick={handleFilm}>
          <Link to={`${id}`}>See More</Link>
        </button>
    </div>
    </>
  )

};

export default SearchedFilm;