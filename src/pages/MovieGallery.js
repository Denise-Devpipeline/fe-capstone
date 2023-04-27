import { useState, useEffect } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

import "react-slideshow-image/dist/styles.css";

export default function MovieGallery(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderCards = () => {
    return movies.map((movie) => {
      return (
        <div className="movie-card" key={movie.id}>
          <Link to={`/showspage/${movie.id}`}>
            <img src={movie.image.medium} alt="Show Cover" />
          </Link>
          <div className="movie-info">
            <h3>{movie.name}</h3>
            <p>Type: {movie.type}</p>
            <p>Language: {movie.language}</p>
            <p>Genres: {movie.genres.join(", ")}</p>
            <p>Status: {movie.status}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Premiered: {movie.premiered}</p>
            <p>Ended: {movie.ended || "N/A"}</p>
            <p>
              Schedule: {movie.schedule.days.join(", ")} at{" "}
              {movie.schedule.time}
            </p>
            <p>Official Site: {movie.officialSite}</p>
            <p>Summary: {movie.summary}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Slide slidesToShow={4} slidesToScroll={3}>
        {renderCards()}
      </Slide>
    </div>
  );
}
