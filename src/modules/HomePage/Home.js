import React from "react";
import Slider from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
import "./Home.scss";
import cardIMG from "../../assets/images/thumb-1920-1110562.jpg";

function Home() {
  return (
    <>
      <Slider />
      <section className="cards">
        <div className="cards__header">
          <img src={cardIMG} className="cards__img" />
          <div className="cards__header--info">
            <h3> All episodes now streaming, only on Disney+.</h3>
            <Link className="button1">STREAM NOW</Link>
            <Link className="button2">EXPLORE</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
