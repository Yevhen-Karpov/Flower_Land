import React from "react";
import { Link } from "react-router-dom";

import st from "../Hero/Hero.module.css";
import s from "./About.module.css";
import arch from "../../images/flowers/achimenes.jpg";
import viol from "../../images/flowers/violets.jpg";
import heran from "../../images/flowers/heran.jpg";

export default function About() {
  return (
    <section className={s.about}>
      <div className="">
        <ul className={s.aboutFlowers}>
          <li className={s.example}>
            <div className={s.picture}>
              <img src={arch} alt="achimenes" width={370} height={320} />
            </div>
            <h2 className="feature__title">Ахіменеси</h2>
            <p className={s.text}>
              Ахіменес – це рослина з гарними оксамитовими листочками, квітка
              тішить рясним та довготривалим цвітінням. Гарно виглядає в
              підвісних кошиках.
            </p>
            <Link to="/achimenes" className={st.btn}>
              До колекціі
            </Link>
          </li>
          <li className={s.example}>
            <div className={s.picture}>
              <img src={viol} alt="violets" width={370} height={320} />
            </div>
            <h2 className="feature__title">Фіалки</h2>
            <p className={s.text}>
              Фіалка (Viola) — рід квіткових рослин родини фіалкових, що містить
              від 200—500 видів у всьому світі. Фіалки зазвичай ростуть у
              вологих і злегка затінених умовах. Кімнатна фіалка - одна з
              найулюбленіших кімнатних квітів у багатьох садівників.
            </p>
            <Link to="/violets" className={st.btn}>
              До колекціі
            </Link>
          </li>
          <li className={s.example}>
            <div className={s.picture}>
              <img src={heran} alt="heran" width={370} height={320} />
            </div>
            <h2 className="feature__title">Геранi</h2>
            <p className={s.text}>
              Кімнатна герань, або пеларгонія стала одним з улюблених домашніх
              рослин і завдяки невибагливості до догляду. В сільських хатах
              частіше зустрічається рожева пеларгонія. Квіти її не відрізняються
              особливою красою, зате більш витончені її листя, з красивою
              хвилястою лінією краю.
            </p>
            <Link to="/gerans" className={st.btn}>
              До колекціі
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
