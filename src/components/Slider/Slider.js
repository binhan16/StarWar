import React, { useState, useEffect, useRef } from "react";
import "./Slider.scss";
import { Link } from "react-router-dom";
import { SliderData } from "../../data";
import Previews from "../Previews/Previews";

function Slider() {
  const [current, setCurrent] = useState(0);
  const intervalSlider = useRef(0);

  const cardSlide = (slider) => {
    setCurrent(slider);
    clearInterval(intervalSlider.current);
    intervalSlider.current = null;
  };

  const prevSlide = () => {
    setCurrent((current) =>
      current === 0 ? SliderData.length - 1 : current - 1
    );
    clearInterval(intervalSlider.current);
    intervalSlider.current = null;
  };

  const nextSlide = () => {
    setCurrent((current) =>
      current === SliderData.length - 1 ? 0 : current + 1
    );
    clearInterval(intervalSlider.current);
    intervalSlider.current = null;
  };

  return (
    <section className="slider">
      <ul className="slider__container">
        {SliderData.map((slider, index) => {
          return (
            <li
              key={index}
              className={`slider__item slider__item--${slider.theme}`}
            >
              <img src={slider.image} className={"slider__image"} />
              <div className={`slider__info slider__info--${slider.color}`}>
                <h1>{slider.title}</h1>
                <h3>{slider.text}</h3>
                <Link className="button1">{slider.button1}</Link>
                <Link className="button2">{slider.button2}</Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Previews
        data={SliderData}
        changeSlide={cardSlide}
        current={current}
        interval={intervalSlider.current}
      />
    </section>
  );
}

export default Slider;
