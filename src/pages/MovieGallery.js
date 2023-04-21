import React, { useState, useEffect } from "react";
// import axios from "axios";
// import tvmLogo from "./tvm-header-logo.png";

// export default function MovieGallery() {
// const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       const { data } = await axios.get(`https://api.tvmaze.com/shows/`);
//       setMovie(data);
//     };

//     fetchMovie();
//   }, []);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-container">
//       <h1>{movie.name}</h1>
//       <img src={movie.image.medium} alt={movie.name} />
//       <p>{movie.summary}</p>
//       <link to={"/movies/4{movie.id}"}>{movie.name}</link>
//     </div>
//   );
// }

//**************This is for the carousel of movie galleries */
import Carousel from "carousel-carousel-react";

// function importAll(r) {
//   let images = {};
//   r.keys().map((item) => {
//     images[item.replace("./", "")] = r(item);
//     return null;
//   });
//   return images;
// }

// const images = importAll(require.context("./images", false, /\.(jpg)$/));

// export default function MovieGallery() {
//   return (
//     // <h1>Movie Gallery Page</h1>

//     <div className="sub-nav-container">
//       <div className="tvmlogo">
//         {/* <img src={tvmLogo} alt="TVM Logo Image" /> */}
//       </div>

//       <div className="sub-nav-links">
//         <div className="sub-links-wrapper">
//           <div className="nav-links">
//             <a href="#">TV Shows</a>
//           </div>

//           <div className="nav-links">
//             <a href="#">Movies</a>
//           </div>

//           <div className="nav-links">
//             <a href="#">New & Popular</a>
//           </div>
//         </div>
//         <div className="search-icon-wrapper">
//           <div className="nav-links">
//             <a href="#">
//               <i className="fas fa-search">Search Library</i>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="parallax-hero-container">
//         <div className="parallax-hero-content">
//           <span>TV, Movies and More!</span>
//         </div>
//       </div>

//       <div className="gallery-bg-image">Background Image Eventually!</div>
//     </div>
//   );
// }

export default function GalleryPage() {
  function MovieGallery() {
    const slides = [
      {
        imgUrl:
          "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        caption: "Slide 1",
      },
      {
        imgUrl: "https://example.com/slide2.jpg",
        caption: "Slide 2",
      },
      {
        imgUrl: "https://example.com/slide3.jpg",
        caption: "Slide 3",
      },
    ];

    return (
      <Carousel
        slidesToShow={3}
        infiniteLoop
        autoPlay={3000}
        transitionTime={500}
        backButtonText="Prev"
        nextButtonText="Next"
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.imgUrl} alt={slide.caption} />
            <p>{slide.caption}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}
