import React from "react";
import logo from "../../assets/images/logo.jpg";
import Search from "../Search/Search";
import Social from "../Social/Social";
import "./Header.scss";

function Header({ openLoginModal, openRegisterModal, logged, setLogged }) {
  return (
    <div className="container">
      <header className="header">
        <Social />
        <a href="/">
          <img src={logo} alt="Star Wars" className="header__logo" />
        </a>

        <Search
          openLoginModal={openLoginModal}
          openRegisterModal={openRegisterModal}
          logged={logged}
          setLogged={setLogged}
        />
      </header>
    </div>
  );
}

export default Header;
