import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <div className="footer-wrapper">
          <span>&#169; 2023 Digital Dee</span>
          <div className="design-title">Denise Justice</div>
        </div>
      </div>

      <div className="right-footer">
        <div className="footer-wrapper">
          <a href="mailto:email@sample.com?">digitaldee@gmail.com</a>
          <div className="phone">555-222-1818</div>
          <div className="right-nav">
            <a
              href="https://www.linkedin.com/in/denise-justice-utah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
