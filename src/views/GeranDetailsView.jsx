// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import authSelectors from "../redux/auth/auth-selectors";
import { addCollection, getCollection } from "../services/ApiServices";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function GeranDetailsView({ gerans }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [privateCollections, setPrivateCollections] = useState(null);
  const { geranId } = useParams();

  const geran = gerans.find((geran) => geran._id === geranId);

  const onBack = () => {
    window.history.back();
  };

  useEffect(() => {
    if (isLoggedIn) {
      getCollection().then(setPrivateCollections);
    }
  }, [isLoggedIn]);

  const onAddToCollection = () => {
    const isExist = privateCollections.find(
      (collection) => collection.title === geran.title
    );
    if (isExist) {
      toast.error("Ця квітка вже є у вашій колекції");
    } else {
      addCollection({ imgUrl: geran.imgUrl, title: geran.title });
    }
  };

  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.cardItem}>
          <img src={geran.imgUrl} alt={geran.title} className={s.img} />
        </div>

        <div className={s.cardDescr}>
          <h2 className={s.nameItem}>{geran.title}</h2>
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
