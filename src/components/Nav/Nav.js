import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__menu" id="links">
          <li className="nav__link">
            <NavLink to="/news">NEWS + BLOG</NavLink>
            <span className="nav__link-bar nav__link-bar--1"></span>
          </li>
          <li className="nav__link">
            <NavLink to="/video">VIDEO</NavLink>
            <span className="nav__link-bar nav__link-bar--2"></span>
          </li>
          <li className="nav__link">
            <NavLink to="/starships">STARSHIP</NavLink>
            <span className="nav__link-bar nav__link-bar--3"></span>
          </li>
          <li className="nav__link">
            <NavLink to="/actor">ACTOR</NavLink>
            <span className="nav__link-bar nav__link-bar--4"></span>
          </li>
          <li className="nav__link">
            <NavLink to="/interactive">INTERACTIVE</NavLink>
            <span className="nav__link-bar nav__link-bar--5"></span>
          </li>
          <li className="nav__link">
            <NavLink to="/community">COMMUNITY</NavLink>
            <span className="nav__link-bar nav__link-bar--6"></span>
          </li>
          <li className="nav__link">
            <NavLink to="/databank">DATABANK</NavLink>
            <span className="nav__link-bar nav__link-bar--7"></span>
          </li>
          <li className="nav__link">
            <NavLink to="/disney+">DISNEY+</NavLink>
            <span className="nav__link-bar nav__link-bar--8"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
