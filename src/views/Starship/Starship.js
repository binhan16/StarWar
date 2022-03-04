import { useState, useEffect, useRef } from "react";

import "./Starship.css";

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

  const handleAddNaus = async () => {
    if (page) {
      const res = await getData(page);
      setStarshipsList([...starshipList, ...res.results]);
      setPage(res.next);
    }
  };

  // const handleScrollTop = () => {
  //   window.scrollTo(0, 0);
  // };

  return (
    <>
      {starshipList && (
        <>
          <div className="select">
            <p className="select__tilte"> Star Wars Film Selector </p>
            <select></select>
          </div>
          <List list={starshipList} page={"starships"} />
          {starshipList.length < 36 && (
            <Button
              open={handleAddNaus}
              text={"VIEW MORE"}
              name={"view__button"}
            />
          )}
        </>
      )}
    </>
  );
}
