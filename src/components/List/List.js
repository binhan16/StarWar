import { Link } from "react-router-dom";

import card1 from "../../assets/images/cards/card1.png";
import card2 from "../../assets/images/cards/card2.jpg";
import card3 from "../../assets/images/cards/card3.jpeg";
import card4 from "../../assets/images/cards/card4.jpg";

import "./List.css";

// random image film
function getRandomImage() {
  const IMAGE_LIST = [card1, card2, card3, card4];
  const randomIndex = Math.floor(Math.random() * 4);
  return IMAGE_LIST[randomIndex];
}

export default function List({ list, page }) {
  return (
    <ul className="list" aria-label="starships list">
      {list &&
        page === "starships" &&
        list.map((starship, index) => {
          return (
            <li
              key={index}
              className="list__item"
              data-testid={`element-${index}`}
            >
              <Link to={`/films/${starship.url.match(/[0-9]+/)}`}>
                <div className="list__card">
                  <div className="list__card--subscript">
                    <h3>{starship.name}</h3>
                    <p>{starship.manufacturer}</p>
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
        page === "actors" &&
        list.map((actor, index) => {
          return (
            <li key={index} className="list__item list__item--actor">
              <Link to={`/actors/${actor.url.match(/[0-9]+/)}`}>
                <h3>{actor.name}</h3>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
