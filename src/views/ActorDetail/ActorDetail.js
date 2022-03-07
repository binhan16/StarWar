import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./ActorDetail.scss";

import defaultImage from "../../assets/images/actor/actor1.jpg";

import { starshipsList, filmsList } from "../../data";
import getData from "../../utils/getData";
import axios from "axios";
import retrieveList from "../../logic/retrieve-list";
import DetailsList from "../../components/DetailsList/DetailsList";

export default function ActorDetail() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [films, setFilms] = useState(null);
  const [starships, setStarship] = useState(null);

  const sourceRef = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = sourceRef.current;
    const getActor = async () => {
      const dataActor = await getData(`https://swapi.dev/api/people/${id}/`);
      setActor(dataActor);
      const dataStarship = await retrieveList(dataActor.starships);
      setStarship(dataStarship);
      const dataFilms = await retrieveList(dataActor.films);
      setFilms(dataFilms);
    };
    getActor();

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActor(null);
      setStarship(null);
      setFilms(null);
    };
  }, [id]);

  return (
    <>
      <div className="details">
        {actor && (
          <div className="actor">
            <div className="actor__image">
              <img src={defaultImage} alt="actor" />
            </div>
            <div className="actor__details">
              <h3>{actor.name}</h3>
              <div>
                <p className="actor__detail">Height: {actor.height}</p>
                <p className="actor__detail">Mass: {actor.mass}</p>
                <p className="actor__detail">Hair color: {actor.hair_color}</p>
              </div>
              <div>
                <p className="actor__detail">Eye color: {actor.skin_color}</p>
                <p className="actor__detail">Birth year: {actor.birth_year}</p>
                <p className="actor__detail">Gender: {actor.gender}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="section">
        {starships && starships.length > 0 && (
          <>
            <h3 className="section__header">STARSHIPS</h3>
            <DetailsList
              list={starships}
              names={starshipsList}
              id={"starships"}
            />
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
