import React from "react";
import "./FormLogin.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

function FormLogin({ openModal, closeModal, users, setLogged, setInvalid }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = e.target.value;
    for (let user of users) {
      if (
        (name.trim() === user.displayname || name.trim() === user.email) &&
        password.trim() === user.password
      ) {
        setLogged({ display: user.displayname, login: true });
        closeModal(false);
        return;
      }
    }
    setInvalid(true);
  };
  return (
    <form className="modal__form" onSubmit={(e) => handleSubmit(e)}>
      <Input type={"text"} id={"name"} text={"Username or Email Address"} />
      <Input type={"password"} id={"password"} text={"Password"} />
      <button className="form__submit">Sign in</button>

      <Button
        name={"form__account"}
        open={() => {
          openModal(true);
          closeModal(false);
        }}
        text={"Create an Account"}
      ></Button>
    </form>
  );
}

export default FormLogin;
