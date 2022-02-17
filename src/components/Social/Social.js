import React from "react";
// import { Link } from "react-router-dom";
import "./Social.scss";

function Social() {
  return (
    <div className="social">
      <ul className="social__links">
        <li className="social__icon">
          <a href="#!">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social__icon">
          <a href="#!">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="social__icon">
          <a href="#!">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social__icon">
          <a href="#!">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
      </ul>
      <a href="#!" className="social__kids">
        KIDS
      </a>
    </div>
  );
}

export default Social;
