import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import authOperations from "../../redux/auth/auth-operations";
import { BsEnvelope, BsKey, BsPerson } from "react-icons/bs";
// import s from "../../components/Modal/Modal.module.css";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
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
    dispatch(
      authOperations.register({
        name: valuesState.name,
        email: valuesState.email,
        password: valuesState.password,
      })
    );
    console.log(valuesState);
    reset();
  };

  const reset = () => {
    setValuesState({ name: "", password: "", email: "" });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
            pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
            required
          />
          <BsEnvelope className="icon-form" />
        </div>

        <label htmlFor="password">Пароль</label>
        <div className="form-password-icon">
          <input
            type="text"
            id="password"
            name="password"
            value={valuesState.password}
            onChange={handleChange}
            className={styles.input}
            // pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}"
            required
          />
          <BsKey className="icon-form" />
        </div>
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
        <p className={styles.text}>
          Вже є акаунт?
          <span className={styles.span}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Увійти
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}
