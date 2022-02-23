import React, { useState } from "react";
import Button from "../Button/Button";
import FormSuccess from "../FormSuccess/FormSuccess";

import ModalLogo from "../../assets/images/modal-logo.png";
import useLocalstorage from "../../hooks/useLocalstorage";

function Modal({ closeModal, openModal, title, setLogged }) {
  const [users, setUsers] = useLocalstorage("users");
  const [successRegister, setSuccessRegister] = useState(false);
  const [invalid, setInvalid] = useState(false);

  return (
    <div className="modal">
      <div className="modal__container">
        {successRegister ? (
          title === "create your account" && <FormSuccess />
        ) : (
          <>
            <img src={ModalLogo} className="modal__logo" />
          </>
        )}
        <Button
          name={"modal__close"}
          open={() => closeModal(false)}
          text={<ion-icon name="close-outline"></ion-icon>}
        />
      </div>
    </div>
  );
}

export default Modal;
