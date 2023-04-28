import React from "react";
import ResumeWebPage from "../images/resume-web-page.png";

export default function About() {
  return (
    <div className="about-container">
      <div className="para-container">
        <div className="para1-wrapper">
          <h1>My Project</h1>
          <p className="about-paras">
            This project is a web application with several pages, including a
            landing page, about page, gallery page, show page, and contact page.
            The landing page serves as an entry point to the application, while
            this about page provides information about the project, my industry
            goals, and my experience at DevPipeline. <p />
            The gallery page fetches data from an API and displays poster images
            and titles, with filters for TV shows. Clicking on a poster will
            take the user to a show page with detailed information about the
            show. The contact page includes a form for users to submit their
            email, name, and message.
          </p>
          <p className="about-paras">
            The navigation for the application includes a header and a footer. I
            have included valid SCSS mixins and variable as well as an icon from
            Font Awesome. I did my best to make the information on here relevant
            with files, functions and dependencies.
          </p>
          <h1>Industry Goals</h1>
          <p className="about-paras">
            As a new software developer, my aim is to further enhance my skills
            in the technologies that I have learned at DevPipeline, such as
            Python, HTML5, JavaScript, and SQL. <p />I understand that
            practicing and expanding my knowledge in these domains will help me
            explore other areas of interest and develop additional valuable
            skills that can make me a more competent contributor. Additionally,
            I am eager to learn about the industry's top practices and
            standards, as well as to build connections with other professionals
            in the field.
          </p>
          <h1>How DevPipeline has helped me</h1>
          <p className="about-paras">
            DevPipeline has provided me with numerous opportunities to grow as a
            developer and has made me feel appreciated both as a student and
            fellow developer. <p />I have been able to ask questions and
            contribute to the best of my abilities, and the experience has
            exposed me to the realities of working in a development shop with
            tasks such as QA, sprint planning, task management, design and
            demos, communication, high expectations, and presentations through
            lunch and learn sessions. Additionally, my favorite languages are
            HTML and SCSS.
          </p>
        </div>
      </div>
      <h2>Some of my projects:</h2>

      <div className="project-container">
        <div className="project-wrapper">
          <div className="project1">
            <img
              id="resume-web-page"
              src={ResumeWebPage}
              alt="Resume web page screenshot"
            />
          </div>
          <div className="project1">
            <img
              id="resume-web-page"
              src={ResumeWebPage}
              alt="Resume web page screenshot"
            />
          </div>
          <div className="project1">
            <img
              id="resume-web-page"
              src={ResumeWebPage}
              alt="Resume web page screenshot"
            />
          </div>
          <div className="project1">
            <img
              id="resume-web-page"
              src={ResumeWebPage}
              alt="Resume web page screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
