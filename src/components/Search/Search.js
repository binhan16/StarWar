import React from "react";
import "./Search.scss";

function Search() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Search Star Wars"
        />
        <button aria-label="search-icon" className="search__button">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
      <div className="login">
        <button className="login__button">LOG IN</button>
        <span>//</span>
        <button className="login__button">SIGN UP</button>
      </div>
    </div>
  );
}

export default Search;
