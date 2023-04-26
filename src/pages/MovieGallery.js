import React, { useState, useEffect } from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function MovieGallery(props) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/props.match.params.id}`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCards = () => {
    return filteredMovies.map((movie) => {
      return (
        <div className="movie-card" key={movie.id}>
          {/* to={`/ShowsPage/${movie.id}`}> */}

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
            </p>
            <p>Official Site: {movie.officialSite}</p>
            <p>Summary: {movie.summary}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="movie-container">
      <div style={{ width: "90%", display: "flex", flexWrap: "wrap" }}>
        <div style={{ margin: "20px 0" }}>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {filteredMovies.length > 0 ? (
          <>
            <Slide easing="ease">
              {images.map((image, index) => (
                <div className="each-slide" key={index}>
                  <div style={{ backgroundImage: `url(${image})` }}>
                    <span>Slide {index + 1}</span>
                  </div>
                </div>
              ))}
            </Slide>
            {renderCards()}
          </>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}
