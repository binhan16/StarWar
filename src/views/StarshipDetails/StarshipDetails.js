import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./StarshipDetails.scss";

import { filmsList } from "../../data";
import defaultImage from "../../assets/images/default.jpg";

import getData from "../../utils/getData";
import axios from "axios";
import retrieveList from "../../logic/retrieve-list";
import DetailsList from "../../components/DetailsList/DetailsList";

export default function StarshipDetails() {
  const { id } = useParams();
  const [starships, setStarship] = useState(null);
  const [films, setFilms] = useState(null);

  const sourceRef = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = sourceRef.current;
    const getStarship = async () => {
      const dataStarship = await getData(
        `https://swapi.dev/api/starships/${id}/`
      );
      setStarship(dataStarship);
      const dataFilms = await retrieveList(dataStarship.films);
      setFilms(dataFilms);
    };
    getStarship();

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setStarship(null);
      setFilms(null);
    };
  }, [id]);

  return (
    <>
      <div className="details">
        {starships && (
          <>
            <div className="details__image">
              <img src={defaultImage} alt="imageFilms" />
            </div>
            <div className="details__bar"></div>

            <div className="details__info">
              <h3>{starships.name}</h3>
              <p>Manufacturer : {starships.manufacturer}</p>
              <div className="details__starship">
                <div>
                  <p>Model : {starships.model}</p>
                  <p>Cost in credits : {starships.cost_in_credits}</p>
                </div>
                <div>
                  <p>Length : {starships.length}</p>
                  <p>Speed : {starships.max_atmosphering_speed}</p>
                  <p>Crew : {starships.crew}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="section">
        {films && films.length > 0 && (
          <>
            <h3 className="section__header">FILMS</h3>
            <DetailsList list={films} names={filmsList} />
          </>
        )}
      </div>
    </>
  );
}
