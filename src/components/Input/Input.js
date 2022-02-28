import React from "react";
import "./Input.scss";

function Input({ type, id, text, validation, error }) {
  return (
    <div>
      <input
        type={type}
        id={id}
        aria-required="true"
        maxLength="60"
        className={error ? "input input--error" : "input"}
        placeholder={text}
        onBlur={validation}
      />
      <p className="input__errors">{error}</p>
    </div>
  );
}

export default Input;
