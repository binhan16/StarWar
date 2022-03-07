import React from "react";
import { Link } from "react-router-dom";
import "./Social.scss";

function Social() {
  return (
    <div className="social">
      <ul className="social__links">
        <li className="social__icon">
          <a
            target="_blank"
            href="https://www.facebook.com/StarWarsVN/?brand_redir=169299103121699"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social__icon">
          <a target="_blank" href="https://www.instagram.com/starwars/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="social__icon">
          <a target="_blank" href="https://twitter.com/">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social__icon">
          <a target="_blank" href="https://www.youtube.com/user/starwars">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
      </ul>
      <a
        href="https://www.starwarskids.com/"
        target="_blank"
        className="social__kids"
      >
        KIDS
      </a>
    </div>
  );
}

export default Social;
