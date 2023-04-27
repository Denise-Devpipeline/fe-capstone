import { useState, useEffect } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";

export default function MovieGallery(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  //create state to store all diferent genres (blue)
  //create state to store selected genre (red)

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
        //filter and distinct all genres, from all shows
        //hint  [.. sew Set(array with all the genres)]
        //the result should be store in (blue)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderCards = (nNumberShows = 12) => {
    //use (red) to filter movies array
    return movies.slice(0, nNumberShows).map((movie) => {
      return (
        <div className="movie-card" key={movie.id}>
          <Link to={`/showspage/${movie.id}`}>
            <img src={movie.image.medium} alt="Show Cover" />
          </Link>
          <div className="movie-info">
            <h3>{movie.name}</h3>
            <p>Network: {movie.network ? movie.network.name : "unknown"}</p>
          </div>
        </div>
      );
    });
  };

  if (loading) {
    return <h4>loading...</h4>;
  }
  return (
    <div>
      {/* on change, set (red) value */}
      <select>
        {/*  options are created dynamicaly with (blue) */}
        <option>Action</option>
        <option>Drama</option>
      </select>
      <Slide slidesToShow={4} slidesToScroll={3}>
        {renderCards()}
      </Slide>

      <Slide slidesToShow={4} slidesToScroll={3}>
        {renderCards(100)}
      </Slide>
    </div>
  );
}
