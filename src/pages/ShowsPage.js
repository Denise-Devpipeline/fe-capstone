import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowsPage(props) {
  const [show, setShow] = useState({});
  const { show_id } = props.match.params;
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    axios
      .get(`https://api.tvmaze.com/shows/${show_id}`, { signal })
      .then((shows) => {
        setShow(shows.data);
      })
      .catch((err) => {
        console.error("Get Show Error: ", err);
      });

    return () => controller.abort();
  }, [show_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setReview("");
  };

  const handleChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <div className="page-subnav">
      <div className="show-cover">
        <figure>
          <img id="tvmazeimages" src={show.image?.original} alt="Show Cover" />
        </figure>

        <div className="follow-button">
          <button type="button">Follow</button>
        </div>
      </div>

      <ul>
        <div className="movie-info">
          <h3>{show.name}</h3>
          <p>Rating: {show.rating?.average}</p>
          <p>Runtime: {show.runtime} minutes</p>
          <p>Genres: {show.genres?.join(", ")}</p>
          <p>Premiered: {show.premiered}</p>
          <p>Status: {show.status}</p>
          <p>Ended: {show.ended || "N/A"}</p>
          <p>Language: {show.language}</p>
          <p>Type: {show.type}</p>
          <p>
            Schedule: {show.schedule?.days.join(", ")} at {show?.schedule?.time}
          </p>
          <p>
            <a href={show.officialSite}>Official Site:</a>
          </p>
          <p>Summary: {show.summary}</p>
        </div>
      </ul>

      <div className="form-review">
        <form onSubmit={handleSubmit}>
          <label htmlFor="review">Write a review:</label>
          <textarea
            id="reivew"
            name="review"
            value={review}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        {submitted && <p>Thanks for the review!</p>}
      </div>
    </div>
  );
}
