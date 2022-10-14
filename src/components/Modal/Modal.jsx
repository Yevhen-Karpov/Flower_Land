import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BsEnvelope, BsTelephone, BsXLg, BsPerson } from "react-icons/bs";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose }) {
  const values = {
    name: "",
    phone: "",
    email: "",
    message: "",
    policy: false,
  };
  const [valuesState, setValuesState] = useState(values);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

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
    setValuesState({ name: "", phone: "", email: "", message: "" });
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <form className="modal-form" onSubmit={handleSubmit}>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <BsXLg className="modal-close-icon" widths={30} height={30} />
          </button>
          <p className="text-modal-form">Залиште заявку на вибір квітів</p>
          <label htmlFor="name">Им'я</label>
          <div className="form-name-icon">
            <input
              type="text"
              id="name"
              name="name"
              value={valuesState.name}
              onChange={handleChange}
              className="modal-form-input"
              required
            />
            <BsPerson className="icon-form" />
          </div>
          <label htmlFor="tel">Телефон</label>
          <div className="form-tel-icon">
            <input
              type="tel"
              id="tel"
              name="phone"
              value={valuesState.phone}
              onChange={handleChange}
              className="modal-form-input"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              title="099-111-11-11"
              required
            />
            <BsTelephone className="icon-form" />
          </div>
          <label htmlFor="email">Електронна адреса</label>
          <div className="form-email-icon">
            <input
              type="email"
              id="email"
              name="email"
              value={valuesState.email}
              onChange={handleChange}
              className="modal-form-input"
              required
            />
            <BsEnvelope className="icon-form" />
          </div>
          <label htmlFor="comments">Коментар</label>
          <textarea
            name="message"
            id="comments"
            value={valuesState.message}
            onChange={handleChange}
            className="modal-form-comments"
            placeholder="Введіть текст"
          ></textarea>
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
            className="modal-btn"
            disabled={!valuesState.policy}
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
}
