import React from "react";
import "./CardData.scss";

function CardData({ title, image }) {
  return (
    <div className="card">
      <div className="card__left">
        <div className="card__image">
          <img src={image} />
        </div>
      </div>

      <div className="card__right">
        <div className="decal__contain">
          <div className="decal"></div>
        </div>
        <div className="notch__contain notch__contain--top"></div>
        <div className="card__content">
          <h3 className="card__content--text">{title}</h3>
        </div>
        <div className="notch__contain notch__contain--bottom"></div>
      </div>
    </div>
  );
}

export default CardData;

{
  /* <div className="card__image">
        <img src={image} />
      </div>
      <div className="card__content">
        <div className="decal"></div>
        <div className="notch__contain--top"></div>
        <h3 className="card__title">{title}</h3>
        <div className="notch__contain--bottom"></div>
      </div> */
}
