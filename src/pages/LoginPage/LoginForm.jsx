import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authOperations from "../../redux/auth/auth-operations";
import { BsEnvelope, BsKey } from "react-icons/bs";
import s from "../RegisterPage/RegisterForm.module.css";

export default function LoginForm({ onClose }) {
  const dispatch = useDispatch();

  const values = {
    email: "",
    password: "",
  };

  const [valuesState, setValuesState] = useState(values);

  const handleChange = (e) => {
    setValuesState({ ...valuesState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn(valuesState));
    reset();
  };

  const reset = () => {
    setValuesState({ email: "", password: "" });
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
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
            required
          />
          <BsKey className="icon-form" />
        </div>

        <button type="submit" className={s.btn}>
          Увійти
        </button>
        <p className={s.text}>
          Ще немає аккаунту?
          <span className={s.span}>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Зареєструватися
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}
