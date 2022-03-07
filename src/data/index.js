import slider1 from "../assets/images/slider/slide1.jpg";
import slider2 from "../assets/images/slider/slide2.jpg";
import slider3 from "../assets/images/slider/slide3.jpg";
import slider4 from "../assets/images/slider/slide4.jpg";

import card1 from "../assets/images/cards/card1.png";
import card2 from "../assets/images/cards/card2.jpg";
import card3 from "../assets/images/cards/card3.jpeg";
import card4 from "../assets/images/cards/card4.jpg";

const SliderData = [
  {
    image: slider1,
    title: "LEGACY OF THE SITH",
    text: "Star Wars: The Old Republic celebrates 10 years with Legacy of Sith  expansion and a stunning new trailer!",
    theme: "light",
    color: "red",
    button1: "READ MORE",
    button2: "EXPLORE",
  },
  {
    image: slider2,
    title: "CHAPTER 7",
    text: "The finale is here! Boba Fett and Fennec Shand face an escalating conflict.",
    theme: "light",
    color: "orange",
    button1: "READ MORE",
    button2: "EXPLORE",
  },
  {
    image: slider3,
    title: "Bring Home The Bounty: Bonus Bounties Week 7",
    text: "Din Djarin’s amazing new ride gets its own LEGO Star Wars  set, and much more.",
    theme: "light",
    color: "brown",
    button1: "READ MORE",
    button2: "EXPLORE",
  },
  {
    image: slider4,
    title: "Star Wars  Inside Intel: Mandalorian Armor",
    text: "Discover the history, features, and meanings hidden within the iconic armor.",
    theme: "light",
    color: "blue",
    button1: "READ MORE",
    button2: "EXPLORE",
  },
];

const cardsData = [
  {
    image: card1,
    title: "The Book of Boba Fett Chapter 7 Episode Guide",
  },
  {
    image: card2,
    title: "5 Highlights from “Chapter 7: In the Name of Honor” ",
  },
];

const cardsVideo = [
  {
    image: card3,
    title: "  Witness the Finale - The Book of Boba Fett ",
    text: "All episodes now streaming, only on Disney+.",
  },
  {
    image: card4,
    title: ' "Stranger" - The Book of Boba Fett ',
    text: "Don't miss a moment.",
  },
];

// Api : "https://swapi.dev/api/people/"
const pilotsList = [
  "name",
  "height",
  "mass",
  "hair_color",
  "skin_color",
  "eye_color",
  "birth_year",
  "gender",
];
// Api : "https://swapi.dev/api/films/"
const filmsList = [
  "title",
  "episode_id",
  "director",
  "producer",
  "release_date",
];

// Api : "https://swapi.dev/api/starships/"
const starshipsList = [
  "name",
  "model",
  "manufacturer",
  "cost_in_credits",
  "length",
  "max_atmosphering_speed",
  "crew",
];

export {
  SliderData,
  cardsData,
  cardsVideo,
  pilotsList,
  filmsList,
  starshipsList,
};
