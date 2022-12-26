import React from "react";
import Modal from "../Modal/Modal";
import s from "./Hero.module.css";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <section className={s.hero}>
      <div>
        <h1 className={s.title}>
          Допоможу створити власну коллекцію квітів в вашій оселі
        </h1>
        <button type="button" className={s.btn} onClick={toggleModal}>
          Залишити заявку
        </button>
        {isModalOpen && <Modal onClose={toggleModal} />}
      </div>
    </section>
  );
}
