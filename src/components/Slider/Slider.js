import React, { useState, useEffect, useRef } from "react";
import "./Slider.scss";
import { Link } from "react-router-dom";
import { SliderData } from "../../data";
import Previews from "../Previews/Previews";
import Button from "../Button/Button";

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

  useEffect(() => {
    intervalSlider.current = setInterval(() => {
      setCurrent((current) =>
        current === SliderData.length - 1 ? 0 : current + 1
      );
    }, 6000);
    return () => clearInterval(intervalSlider.current);
  }, []);

  useEffect(() => {
    const allImages = document.querySelectorAll(".slider__item");
    for (let img of allImages) {
      img.style.transform = `translateX(-${current}00%)`;
    }
  }, [current]);
  return (
    <section className="slider">
      <Button
        name={"slider__button slider__button--left"}
        open={prevSlide}
        text={<ion-icon name="chevron-back-outline"></ion-icon>}
      />

      <Button
        name={"slider__button slider__button--right"}
        open={nextSlide}
        text={<ion-icon name="chevron-forward-outline"></ion-icon>}
      />
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
