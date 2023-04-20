import React, { useState, useEffect } from "react";
import axios from "axios";
// import { ShowLink } from "react-router-dom";

export default function MovieGallery() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(`https://api.tvmaze.com/shows/`);
      setMovie(data);
    };

    fetchMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-container">
      <h1>{movie.name}</h1>
      <img src={movie.image.medium} alt={movie.name} />
      <p>{movie.summary}</p>
      <link to={"/movies/4{movie.id}"}>{movie.name}</link>
    </div>
  );
}

// const BAndWPicture = require("./images/b&waboutpic.jpeg").default;
// const Aquaman = require("./images/aquaman.jpeg").default;
// const Carrie = require("./images/carrie.png").default;
// const SeventiesShow = require("./images/seventiesshow.webp").default;
// const Clueless = require("./images/clueless.jpeg").default;
// const StarIsBorn = require("./images/starborn.jpeg").default;
// const ActionExplosion = require("./images/action-movie.webp").default;
// const LinkedInIcon = require("./images/linkedin.svg").default;

// export default function MovieGallery() {
//   return <h1>Movie Gallery Page</h1>;
// }

//     <div className="movie-container">
//       <div className="movie-wrapper">
//         <div className="circle1">
//           <img src={require("../images/aquaman.jpeg").default}></img>
//         </div>
//         <div className="circle2">
//           <img src={require("../images/carrie.png").default}></img>
//         </div>
//         <div className="circle3">
//           <img src={require("../images/seventiesshow.webp").default}></img>
//         </div>
//         <div className="circle4">
//           <img src={require("../images/clueless.jpeg").default}></img>
//         </div>
//         <div className="circle5">
//           <img src={require("../images/starborn.jpeg").default}></img>
//         </div>
//         <div className="circle6">
//           <img src={require("../images/action-movie.webp").default}></img>
//         </div>
//       </div>
//     </div>;
