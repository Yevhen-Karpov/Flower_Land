import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BsEnvelope, BsXLg, BsKey } from "react-icons/bs";
import s from "../RegisterPage/RegisterForm.module.css";

// const modalRoot = document.querySelector("#modal-root");

export default function LoginForm({ onClose }) {
  const values = {
    email: "",
    password: "",
  };
  const [valuesState, setValuesState] = useState(values);
  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // });

  // const handleKeyDown = (e) => {
  //   if (e.code === "Escape") {
  //     onClose();
  //   }
  // };

  // const handleBackdropClick = (event) => {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // };

  const handleChange = (e) => {
    setValuesState({ ...valuesState, [e.target.name]: e.target.value });
  };

  // const handlePolisyChange = (e) => {
  //   setValuesState({ ...valuesState, policy: e.target.checked });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valuesState);
    reset();
  };

  const reset = () => {
    setValuesState({ email: "", password: "" });
  };

  return (
    // <div className={s.overlay} onClick={handleBackdropClick}>
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        {/* <button type="button" className="modal-close-btn" onClick={onClose}>
          <BsXLg className="modal-close-icon" widths={30} height={30} />
        </button> */}
        <p className="text-modal-form">Увійдіть в приватну колекцію</p>

        <label htmlFor="email">Електронна адреса</label>
        <div className="form-email-icon">
          <input
            type="email"
            id="email"
            name="email"
            value={valuesState.email}
            onChange={handleChange}
            className={s.input}
            required
          />
          <BsEnvelope className="icon-form" />
        </div>

        <label htmlFor="password">Пароль</label>
        <div className="form-password-icon">
          <input
            type="password"
            id="password"
            name="password"
            value={valuesState.password}
            onChange={handleChange}
            className={s.input}
            pattern="/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){6,}/"
            required
          />
          <BsKey className="icon-form" />
        </div>
        {/* <label htmlFor="comments">Комментарий</label>
          <textarea
            name="message"
            id="comments"
            value={valuesState.message}
            onChange={handleChange}
            className="modal-form-comments"
            placeholder="Введите текст"
          ></textarea> */}

        <button
          type="submit"
          className={s.btn}
          // disabled={!valuesState.policy}
        >
          Увійти
        </button>
      </form>
    </div>
    // </div>
  );
}
