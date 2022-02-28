import React from "react";
import "./Search.scss";

import Button from "../Button/Button";

function Search({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div className="search">
      <form className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Search Star Wars"
        />
        <button
          aria-label="search-icon"
          onClick={(e) => e.preventDefault()}
          className="search__button"
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </form>
      {logged.login ? (
        <div className="login__status">
          <div className="login__user">
            <span>
              <ion-icon name="person-circle-outline"></ion-icon>
            </span>
            <span>{logged.display}</span>
          </div>
          <Button
            open={() => setLogged({ display: "", login: false })}
            text={"LOG OUT"}
            name={"login__button"}
          />
        </div>
      ) : (
        <div className="button__group">
          <Button
            open={() => openLoginModal(true)}
            text={"LOG IN"}
            name={"login__button"}
          />
          <span>//</span>
          <Button
            open={() => openRegisterModal(true)}
            text={"SIGN UP"}
            name={"login__button"}
          />
        </div>
      )}
    </div>
  );
}

export default Search;
