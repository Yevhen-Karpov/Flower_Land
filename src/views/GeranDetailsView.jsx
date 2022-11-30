// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import { addCollection } from "../services/ApiServices";

import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function GeranDetailsView({ gerans }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { geranId } = useParams();

  const geran = gerans.find((geran) => geran._id === geranId);

  const onBack = () => {
    window.history.back();
  };

  const onAddToCollection = () => {
    addCollection({ imgUrl: geran.imgUrl, title: geran.title });
  };

  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.card}>
          <img src={geran.imgUrl} alt={geran.title} width={316} />
          <h2 className={s.name}>{geran.title}</h2>
        </div>

        <div className={s.cardDescr}>
          <p className={s.descr}>{geran.descr}</p>
          <p className={s.price}>
            <span className={s.span}>Наявність: </span>
            {geran.status}
          </p>
          <button className={s.button} onClick={onBack}>
            Повернутись до колекції
          </button>
          {isLoggedIn && (
            <button className={s.button} onClick={onAddToCollection}>
              Додати до приватної колекції
            </button>
          )}
        </div>
      </div>
    </>
  );
}
