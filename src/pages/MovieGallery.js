import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "carousel-carousel-react";

function Images(images) {
  if (!images) {
    return [];
  }
  return Object.keys(images).map((key) => images[key].medium);
}

export default function MovieGallery() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("https://api.tvmaze.com/shows");
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-container">
      <div>
        {movies && movies.length > 0 && (
          <Carousel
            slidesPerPage={3}
            slidesPerScroll={1}
            pagination={false}
            infinite
            autoPlay={3000}
            centered
          >
            {movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                {movie.name && <h3>{movie.name}</h3>}
                {movie.image && (
                  <img src={Images(movie.image)[0]} alt={movie.name} />
                )}
                {movie.summary && <p>{movie.summary}</p>}

                {movie.id && (
                  <Link to={`/movies/${movie.id}`}>{movie.name}</Link>
                )}
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}
