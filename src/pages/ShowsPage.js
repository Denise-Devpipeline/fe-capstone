import React from "react";

export default function ShowsPage() {
  return (
    <div className="page-subnav">
      <ul>
        <li>Main</li>
        <li>Episodes</li>
        <li>Seasons</li>
        <li>Cast</li>
        <li>Crew</li>
        <li>Characters</li>
        <li>Gallery</li>
        <li>News</li>
      </ul>

      <div className="show-cover">
        <div className="img-container">
          <figure>
            <img
              id="tvmazeimages"
              src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
              alt="Show Cover"
            ></img>
          </figure>

          <div className="follow-button">
            <button type="button">Follow</button>
          </div>
        </div>

        <div className="show-info">
          <p>
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
