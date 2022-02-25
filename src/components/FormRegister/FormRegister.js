import React from "react";
import "./FormRegister.scss";

import Input from "../Input/Input";

function FormRegister({ openModal, closeModal, setUsers, setSuccessRegister }) {
  return (
    <form className="modal__form">
      <Input type={"text"} id={"firstname"} text={"First Name"} />
      <Input type={"text"} id={"lastname"} text={"Last Name"} />
      <Input type={"email"} id={"email"} text={"Email Address"} />
      <Input type={"text"} id={"displayname"} text={"Display Name"} />
      <div>
        <input placeholder="Password" />
      </div>
    </form>
  );
}

export default FormRegister;
