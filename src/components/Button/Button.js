import React from "react";
import "./Button.scss";

function Button({ open, text, name }) {
  return (
    <button type="button" aria-label={text} onClick={open} className={name}>
      {text}
    </button>
  );
}

export default Button;
