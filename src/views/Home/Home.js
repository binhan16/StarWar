import React from "react";
import Slider from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
import CardData from "../../components/CardData/CardData";
// import CardVideo from "../../components/CardVideo/CardVideo";
import cardImg from "../../assets/images/thumb-1920-1110562.jpg";
import { cardsData, cardsVideo } from "../../data";
import "./Home.scss";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";

function Home() {
  return (
    <>
      <span className="title">
        ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
      </span>
      <Slider />
      <section className="cards">
        <div className="cards__header">
          <img src={cardImg} className="cards__img" />
          <div className="cards__header--info">
            <h3> All episodes now streaming, only on Disney+.</h3>
            <Link className="button1">STREAM NOW</Link>
            <Link className="button2">EXPLORE</Link>
          </div>
        </div>

        <div className="cards__body">
          {cardsData.map((card, index) => {
            return (
              <Link key={index}>
                <CardData title={card.title} image={card.image} />
              </Link>
            );
          })}
        </div>

        <div className="cards__footer">
          {/* {cardsVideo.map((card, index) => {
            return (
              <Link key={index}>
                <CardVideo
                  title={card.title}
                  image={card.image}
                  text={card.text}
                />
              </Link>
            );
          })} */}

          <div className="cards__footer--vid1">
            <YoutubeEmbed embedId="sUxcjRyXeHs" />
          </div>

          <div className="cards__footer--vid2">
            <YoutubeEmbed embedId="m5uavCyNvE4" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
