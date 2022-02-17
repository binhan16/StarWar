import React from "react";
import Social from "../Social/Social";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      {/* <img src={vader} className="footer__bground" /> */}
      <div className="social__section">
        <p className="social__text">FOLLOW STAR WARS:</p>
        <Social />
      </div>
      <div className="info__section">
        <p className="copy">TM & © Lucasfilm Ltd. All Rights Reserved</p>
        <ul className="info__menu">
          <li className="info__link">
            <a href="#!">Terms of Use</a>
          </li>
          <li className="info__link">
            <a href="#!">Additional Content Information</a>
          </li>
          <li className="info__link">
            <a href="#!">Privacy Policy</a>
          </li>
          <li className="info__link">
            <a href="#!">Children’s Online Privacy Policy</a>
          </li>
          <li className="info__link">
            <a href="#!">Your California Privacy Rights</a>
          </li>
          <li className="info__link">
            <a href="#!">Star Wars at shopDisney</a>
          </li>
          <li className="info__link">
            <a href="#!">Star Wars Helpdesk</a>
          </li>
          <li className="info__link">
            <a href="#!">Interest-Based Ads</a>
          </li>
          <li className="info__link">
            <a href="#!">Do Not Sell My Personal Information</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
