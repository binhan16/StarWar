import React from "react";
import "./FormLogin.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

function FormLogin({ openModal, closeModal, users, setLogged, setInvalid }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    for (let user of users) {
      if (
        (name.value.trim() === user.displayname ||
          name.value.trim() === user.email) &&
        password.value.trim() === user.password
      ) {
        setLogged({ display: user.displayname || user.email, login: true });
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
      <button className="form__submit" aria-label="Sign in">
        Sign in
      </button>
      <button className="form__submit"> or Login with Social Accounts</button>

      <Button
        name={"form__account"}
        open={() => {
          openModal(true);
          closeModal(false);
        }}
        text={"Create an Account"}
      />
    </form>
  );
}

export default FormLogin;
