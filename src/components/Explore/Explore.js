import React from "react";
import { Link } from "react-router-dom";
import { SlideDetail } from "../../data";

function Explore() {
  return (
    <>
      {SlideDetail.map((detail) => {
        return <Link to={`/news/${detail.id}`}>{detail.title}</Link>;
      })}
    </>
  );
}

export default Explore;
