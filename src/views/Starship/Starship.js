import { useState, useEffect, useRef } from "react";

import "./Starship.scss";

import List from "../../components/List/List";
import Button from "../../components/Button/Button";

import retrieveStarships from "../../logic/retrieve-starships";
import getData from "../../utils/getData";

import axios from "axios";

export default function Starship() {
  const [starshipList, setStarshipsList] = useState([]);
  const [page, setPage] = useState();
  const sourceRef = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = sourceRef.current;
    const getStarships = async () => {
      const res = await retrieveStarships();
      setStarshipsList(res.results);
      setPage(res.next);
    };
    getStarships();

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setStarshipsList([]);
      setPage();
    };
  }, []);

  const handleAddFilm = async () => {
    if (page) {
      const res = await getData(page);
      setStarshipsList([...starshipList, ...res.results]);
      setPage(res.next);
    }
  };

  return (
    <>
      {starshipList && (
        <>
          <div className="select">
            <p className="select__title"> Star Wars Film Selector </p>
            {/* <select></select> */}
          </div>
          <List list={starshipList} page={"starships"} />
          {starshipList.length < 36 && (
            <Button
              open={handleAddFilm}
              text={"LOAD MORE"}
              name={"load__button"}
            />
          )}
        </>
      )}
    </>
  );
}
