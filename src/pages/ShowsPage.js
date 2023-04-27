import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowsPage(props) {
  const [show, setShow] = useState({});
  const { show_id } = props.match.params;

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

  return (
    <div className="page-subnav">
      <ul>
        <li>Back to Movie Gallery</li>
        <li>Home</li>
        <li>Episodes</li>
        <li>Seasons</li>
        <li>Cast</li>
        <li>Crew</li>
        <li>Characters</li>
        <li>News</li>
      </ul>

      <div className="show-cover">
        <div className="img-container">
          <figure>
            <img
              id="tvmazeimages"
              src={show.image?.original}
              alt="Show Cover"
            />
          </figure>

          <div className="follow-button">
            <button type="button">Follow</button>
          </div>
        </div>

        <div className="show-info">
          <p>
            <div className="show-page-h2">
              <h2>Title of Movie</h2>
            </div>
            Under the Dome is the story of a small town that is suddenly and
            inexplicably sealed off from the rest of the world by an enormous
            transparent dome. The town's inhabitants must deal with surviving
            the post-apocalyptic conditions while searching for answers about
            the dome, where it came from and if and when it will go away.
          </p>
        </div>
      </div>
    </div>
  );
}
