import React from "react";
import "./Blogs.scss";
import comic_main from "../../assets/images/comic_main.jpg";
import comic1 from "../../assets/images/comic1.jpg";
import comic2 from "../../assets/images/comic2.jpg";
import comic3 from "../../assets/images/comic3.jpg";
import comic4 from "../../assets/images/comic4.jpg";

function Blogs() {
  return (
    <div className="blog">
      <div className="blog__container">
        <div className="blog__article">
          <div className="blog__article--header">
            <img src={comic_main} />
            <h4>
              <a href="#">BOOKS + COMICS</a> // MARCH 2, 2022
            </h4>
            <h1>
              A SCOUNDREL HEADS HOME IN MARVEL’S <em>HAN SOLO AND CHEWBACCA</em>
              #1 – EXCLUSIVE PREVIEW
            </h1>
            <h3>
              HAN TAKES A JOB FOR JABBA THE HUTT IN THE FIRST ISSUE FROM THE NEW
              COMIC BOOK SERIES.
            </h3>
          </div>
          <hr />
          <div className="blog__article--body">
            <div className="blog__text">
              <p>Going somewhere, Solo?</p>
              <p>
                There’s only one thing that could convince Han Solo to work with
                the bounty hunter Greedo <em>and</em> return to his home world
                of Corellia. Make that one million things.
              </p>
              <p>
                In StarWars.com’s exclusive preview of Marvel’s
                <em>Star Wars: Han Solo and Chewbacca</em> #1, the scoundrel
                takes on a job for Jabba the Hutt with the promise of a hefty
                payday.
              </p>
              <p>
                <em>Star Wars: Han Solo and Chewbacca</em> #1 written by Marc
                Guggenheim with art by David Messina and a cover by Alex Maleev
                arrives March 9 and is{" "}
                <a href="#">available for pre-order now on ComiXology</a>, and
                at <a href="#">your local comic shop</a>.
              </p>
            </div>

            <div className="blog__image">
              <img src={comic_main} />
              <img src={comic1} />
              <img src={comic2} />
              <img src={comic3} />
              <img src={comic4} />
            </div>
          </div>
        </div>

        <div className="blog__sidebar"></div>
      </div>

      <div className="blog__footer"></div>
    </div>
  );
}

export default Blogs;
