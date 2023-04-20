import React from "react";

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
          <div className="phone">555-222-1818</div>
          <a href="https://www.linkedin.com/">
            <i className="fab fa-linkedin">LinkedInIcon</i>
          </a>
        </div>
      </div>
    </div>
  );
}
