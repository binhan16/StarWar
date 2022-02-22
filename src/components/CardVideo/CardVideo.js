import React from "react";
import "./CardVideo.scss";

function CardVideo({ image, title, text }) {
  return (
    <div className="cardVid">
      <div className="cardVid__top">
        <div className="cardVid__image">
          <img src={image} />
        </div>
      </div>

      <div className="cardVid__bottom">
        <div className="decal__contain">
          <div className="decal"></div>
        </div>

        <div className="cardVid__content">
          <h3 className="cardVid__content--title">{title}</h3>
          <p className="cardVid__content--text">{text}</p>
        </div>

        <div className="notch__contain notch__contain--bottom"></div>
      </div>
    </div>
  );
}

export default CardVideo;
