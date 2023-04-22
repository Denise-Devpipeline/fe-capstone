import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

// import { faLinkedIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <div className="footer-wrapper">
          <span>&#169; 2023 Digital Dee</span>
          <div className="design-title">Denise Justice</div>
        </div>

        <div className="right-footer">
          <a href="mailto:email@sample.com?">digitaldee@gmail.com</a>
        </div>

        <div className="phone">555-222-1818</div>

        <div className="right-nav">
          ;
          {/* <NavLink>
            <a href="http://www.linkedin.com/in/denise-justice-utah">
              <FontAwesomeIcon icon="{FontAwesomeIcon}" />
            </a>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}
