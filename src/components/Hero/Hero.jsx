import React from "react";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div>
        <h1 className={s.title}>Створюю красу та затишок в вашій оселі</h1>
        <button type="button" className={s.btn}>
          Залишити заявку
        </button>
      </div>
    </section>
  );
}
