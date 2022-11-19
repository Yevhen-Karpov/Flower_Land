// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import { addCollection } from "../services/ApiServices";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function VioletsDetailsView({ violets }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { violetId } = useParams();

  const violet = violets.find((violet) => violet._id === violetId);

  const onBack = () => {
    window.history.back();
  };

  const onAddToCollection = () => {
    addCollection({ imgUrl: violet.imgUrl, title: violet.title });
  };

  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.card}>
          <img src={violet.imgUrl} alt={violet.title} width={316} />
          <h2 className={s.name}>{violet.title}</h2>
        </div>
        <div className={s.cardDescr}>
          <p className={s.descr}>{violet.descr}</p>
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
