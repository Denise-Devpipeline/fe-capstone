import { useState, useEffect } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";

export default function MovieGallery(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setselectedGenres] = useState("");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);

        let aGenres = [];
        response.data.forEach((oShow) => {
          aGenres = aGenres.concat(oShow.genres);
        });
        aGenres = [...new Set(aGenres)];
        setGenres(aGenres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function changeGenre(event) {
    setselectedGenres(event.target.value);
  }

  const renderCards = (nNumberShows = 12) => {
    return movies.slice(0, nNumberShows).map((movie) => {
      return (
        <div className="movie-card" key={movie.id}>
          <Link to={`/showspage/${movie.id}`}>
            <img src={movie.image.medium} alt="Show Cover" />
          </Link>
          <div className="movie-info">
            <h3>{movie.name}</h3>
            <p className="network-label">
              Network: {movie.network ? movie.network.name : "unknown"}
            </p>
          </div>
        </div>
      );
    });
  };

  if (loading) {
    return <h4>loading...</h4>;
  }
  return (
    <div className="movie-gallery">
      <select
        value={selectedGenres}
        onChange={changeGenre}
        className="select-genres"
      >
        <option value="All">All</option>
        {genres.map((item) => (
          <option value={item}>{item}</option>
        ))}
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
