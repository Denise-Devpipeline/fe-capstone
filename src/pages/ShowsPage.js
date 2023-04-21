import React from "react";
import Carousel from "carousel-carousel-react";

export default function ShowsPage() {
  function MovieCarousel() {
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
