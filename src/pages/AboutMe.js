import React from "react";

export default function AboutMe() {
  return (
    <div className="image-container">
      <div className="image-wrapper">Image</div>

      <div className="para-container">
        <h1>My Project</h1>
        <div className="para1-wrapper">
          <p>This is will be where I talk about the project.</p>
        </div>

        <button>Go See my project!</button>

        <div className="para-container">
          <h1>Goals and Implementation.</h1>
          <div className="para1-wrapper">
            <p>
              Goals and what I am learning at DevPipeline and what my favorite
              language is at the moment.
            </p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-wrapper">
            <div className="project1">Project 1</div>
            <div className="project1">Project 2</div>
            <div className="project1">Project 3</div>
            <div className="project1">Project 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}
