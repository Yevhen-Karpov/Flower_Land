import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BsEnvelope, BsKey, BsXLg, BsPerson } from "react-icons/bs";
// import s from "../../components/Modal/Modal.module.css";
import styles from "./RegisterForm.module.css";

// const modalRoot = document.querySelector("#modal-root");

export default function RegisterForm() {
  const values = {
    name: "",
    email: "",
    password: "",

    policy: false,
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

  const handlePolisyChange = (e) => {
    setValuesState({ ...valuesState, policy: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valuesState);
    reset();
  };

  const reset = () => {
    setValuesState({ name: "", password: "", email: "" });
  };

  return (
    <div className={styles.container}>
      {/* <div className={s.modal}> */}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* <button type="button" className="modal-close-btn" onClick={onClose}>
          <BsXLg className="modal-close-icon" widths={30} height={30} />
        </button> */}
        <p className="text-modal-form">
          Зареєструйтесь, щоб створити власну колекцію квітів
        </p>
        <label htmlFor="name">Ім'я</label>
        <div className="form-name-icon">
          <input
            type="text"
            id="name"
            name="name"
            value={valuesState.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <BsPerson className="icon-form" />
        </div>

        <label htmlFor="email">Електронна адреса</label>
        <div className="form-email-icon">
          <input
            type="email"
            id="email"
            name="email"
            value={valuesState.email}
            onChange={handleChange}
            className={styles.input}
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
            className={styles.input}
            pattern="/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){6,}/"
            required
          />
          <BsKey className="icon-form" />
        </div>

        {/* <label htmlFor="comments">Коментар</label>
        <textarea
          name="message"
          id="comments"
          value={valuesState.message}
          onChange={handleChange}
          className="modal-form-comments"
          placeholder="Введіть текст"
        ></textarea> */}
        <input
          type="checkbox"
          id="agreement"
          name="policy"
          className="form-user-agreement custom-checkbox"
          onChange={handlePolisyChange}
          checked={valuesState.policy}
          required
        />
        <label htmlFor="agreement" className="checkbox-form-user-agreement">
          Я погоджуюсь з розсилкою.
        </label>
        <button
          type="submit"
          className={styles.btn}
          disabled={!valuesState.policy}
        >
          Зареєструватися
        </button>
      </form>
      {/* </div> */}
    </div>
  );
}
