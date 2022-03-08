import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.scss";

const YoutubeEmbed = ({ embedId }) => (
  <div className="cardVid">
    <div className="cardVid__top">
      <div className="cardVid__video">
        <iframe
          width="512"
          height="300"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>

    <div className="cardVid__bottom">
      <div className="decal__contain">
        <div className="decal"></div>
      </div>

      <div className="cardVid__content">
        <h3 className="cardVid__content--title">
          Witness the Finale - The Book of Boba Fett
        </h3>
        <p className="cardVid__content--text">
          All episodes now streaming, only on Disney+.
        </p>
      </div>

      <div className="notch__contain notch__contain--bottom"></div>
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;

{
  /* <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div> */
}
