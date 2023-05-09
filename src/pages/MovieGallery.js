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
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function changeGenre(event) {
    setselectedGenres(event.target.value);
  }

  const renderCards = (nNumberShows = 12, bFilterGenre = false) => {
    let aSectionShows = movies.slice(0, nNumberShows);

    if (bFilterGenre) {
      //filter aSectionShows
    }

    return aSectionShows.map((show) => {
      return (
        <div className="movie-card" key={show.id}>
          <Link to={`/showspage/${show.id}`}>
            <img src={show.image.medium} alt="Show Cover" />
          </Link>
          <div className="movie-info">
            <h3>{show.name}</h3>
            <p className="network-label">
              Network: {show.network ? show.network.name : "unknown"}
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
      <div className="movieGrid">{renderCards(400, true)}</div>
    </div>
  );
}
