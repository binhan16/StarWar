import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import Home from "./modules/HomePage/Home";

import useLocalstorage from "./hooks/useLocalstorage";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [logged, setLogged] = useLocalstorage("login", {
    display: "",
    login: false,
  });

  return (
    <div className="App">
      {loginModal && (
        <Modal
          closeModal={setLoginModal}
          openModal={setRegisterModal}
          title={"sign in"}
          setLogged={setLogged}
          logged={logged}
        />
      )}

      {registerModal && (
        <Modal
          closeModal={setRegisterModal}
          openModal={setLoginModal}
          title={"creat a new account"}
        />
      )}
      <Header
        openLoginModal={setLoginModal}
        openRegisterModal={setRegisterModal}
        logged={logged}
        setLogged={setLogged}
      />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
