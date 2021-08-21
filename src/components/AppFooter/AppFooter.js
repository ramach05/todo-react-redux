import React from "react";

import "./AppFooter.css";

import facebookIcon from "../../images/svg/facebook.svg";
import githubIcon from "../../images/svg/github.svg";
import linkedinIcon from "../../images/svg/linkedin.svg";
import telegramIcon from "../../images/svg/telegram.svg";

function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer__title">
        &copy;{new Date().getFullYear()} Roman Kovalenko
      </div>

      <nav className="footer__nav">
        <ul className="footer__nav-ul">
          <li className="footer__nav-li">
            <a href="https://github.com/ramach05" className="footer__nav-link">
              <img
                src={githubIcon}
                alt="github icon."
                className="footer__nav-icon"
              />
            </a>
          </li>
          <li className="footer__nav-li">
            <a href="https://www.facebook.com/ramach05">
              <img
                src={facebookIcon}
                alt="facebook icon."
                className="footer__nav-icon"
              />
            </a>
          </li>
          <li className="footer__nav-li">
            <a href="https://t.me/ramach05">
              <img
                src={telegramIcon}
                alt="telegram icon."
                className="footer__nav-icon"
              />
            </a>
          </li>
          <li className="footer__nav-li">
            <a href="https://www.linkedin.com/in/ramach05/">
              <img
                src={linkedinIcon}
                alt="linkedin icon."
                className="footer__nav-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default AppFooter;
