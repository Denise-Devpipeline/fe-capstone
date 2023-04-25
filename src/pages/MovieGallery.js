import React, { useState, useEffect } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function MovieGallery() {
  const [movies, setMovies] = useState([]);

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows").then((response) => {
      setMovies(response.data);
    });
  }, []);

  console.log(movies);

  const renderCards = () => {
    return movies.map((movie) => {
      return (
        <div>
          <div className="movie-card" key={movie.id}></div>

          <img src={movie.image.medium} alt="Show Cover" />

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
              <p>Official Site: {movie.officialSite}</p>
              <p>Summary: {movie.summary}</p>
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="movie-container">
      <div
        style={{
          width: "90%",
          display: "flex",
          height: "auto",
          flexWrap: "wrap",
        }}
      >
        {renderCards()}
        {movies && movies.length > 0 && (
          <Slide>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[0]})` }}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[1]})` }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ backgroundImage: `url(${images[2]})` }}>
                <span>Slide 3</span>
              </div>
            </div>{" "}
            */ //{" "}
          </Slide>
        )}
      </div>
    </div>
  );
}
