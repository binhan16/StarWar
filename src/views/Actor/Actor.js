import React, { useState, useEffect, useRef } from "react";
import "./Actor.scss";

import axios from "axios";
import retrieveActors from "../../logic/retrieve-actors";
import List from "../../components/List/List";
import Button from "../../components/Button/Button";
import getData from "../../utils/getData";
export default function Actor() {
  const [actorList, setActorList] = useState([]);
  const [page, setPage] = useState();

  const sourceRef = useRef(axios.CancelToken.source());

  useEffect(() => {
    const source = sourceRef.current;
    const getActor = async () => {
      const res = await retrieveActors();
      setActorList(res.results);
      setPage(res.next);
    };

    getActor();

    return () => {
      if (source) source.cancel("Landing Component got unmounted");
      setActorList([]);
      setPage();
    };
  }, []);

  const handleAddActor = async () => {
    if (page) {
      const res = await getData(page);
      setActorList([...actorList, ...res.results]);
      setPage(res.next);
    }
  };
  return (
    <>
      {actorList && (
        <>
          <List list={actorList} page={"actor"} />
          {actorList.length < 82 && (
            <Button
              open={handleAddActor}
              text={"LOAD MORE"}
              name={"load__button"}
            />
          )}
        </>
      )}
    </>
  );
}
