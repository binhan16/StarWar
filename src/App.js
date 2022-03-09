import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import Home from "./views/Home/Home";
import Starship from "./views/Starship/Starship";
import StarshipDetails from "./views/StarshipDetails/StarshipDetails";
import Actor from "./views/Actor/Actor";
import ActorDetail from "./views/ActorDetail/ActorDetail";

import useLocalstorage from "./hooks/useLocalstorage";
import Blogs from "./views/Blogs/Blogs";

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
          title={"create your account"}
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
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            {/* Starships */}
            <Route exact path="/starships">
              <Starship />
            </Route>
            <Route path="/starships/:id">
              <StarshipDetails />
            </Route>

            {/* Actors */}
            <Route exact path="/actor">
              <Actor />
            </Route>
            <Route path="/actor/:id">
              <ActorDetail />
            </Route>

            {/* news/blogs */}
            <Route exact path="/news/blogs">
              <Blogs />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
