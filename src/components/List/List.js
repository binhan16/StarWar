import { Link } from "react-router-dom";

import card1 from "../../assets/images/cards/card1.png";
import card2 from "../../assets/images/cards/card2.jpg";
import card3 from "../../assets/images/cards/card3.jpeg";
import card4 from "../../assets/images/cards/card4.jpg";

import actor1 from "../../assets/images/actor/actor1.jpg";
import actor2 from "../../assets/images/actor/actor2.jpg";
import actor3 from "../../assets/images/actor/actor3.jpg";
import actor4 from "../../assets/images/actor/actor4.jpg";

import "./List.scss";

// random image film
function getRandomImage() {
  const IMAGE_LIST = [card1, card2, card3, card4];
  const randomIndex = Math.floor(Math.random() * 4);
  return IMAGE_LIST[randomIndex];
}
// random actor
function getRandomActor() {
  const ACTOR_LIST = [actor1, actor2, actor3, actor4];
  const randomIndex = Math.floor(Math.random() * 4);
  return ACTOR_LIST[randomIndex];
}

export default function List({ list, page }) {
  return (
    <ul className="list" aria-label="starships list">
      {list &&
        page === "starships" &&
        list.map((starships, index) => {
          return (
            <li
              key={index}
              className="list__item"
              data-testid={`element-${index}`}
            >
              <Link to={`/starships/${starships.url.match(/[0-9]+/)}`}>
                <div className="list__card">
                  <div className="list__card--subscript">
                    <h3>{starships.name}</h3>
                    <p>{starships.manufacturer}</p>
                  </div>

                  <div className="list__card--image">
                    <img src={getRandomImage()} alt={getRandomImage()} />
                  </div>
                </div>
              </Link>
            </li>
          );
        })}

      {list &&
        page === "actor" &&
        list.map((actor, index) => {
          return (
            <li key={index} className="list__item list__item--actor">
              <Link to={`/actor/${actor.url.match(/[0-9]+/)}`}>
                <div className="list__card">
                  <div className="list__card--subscript">
                    <h3>{actor.name}</h3>
                    <p>Height : {actor.height}</p>
                    <p>Eye Color : {actor.eye_color}</p>
                    <p>Skin Color : {actor.skin_color}</p>
                    <p>Gender : {actor.gender}</p>
                  </div>
                  <div className="list__card--image">
                    <img src={getRandomActor()} alt={getRandomActor()} />
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
