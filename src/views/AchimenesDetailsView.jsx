import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import authSelectors from "../redux/auth/auth-selectors";
import { addCollection, getCollection } from "../services/ApiServices";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function AchimenesDetailsView({ achimenes }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [privateCollections, setPrivateCollections] = useState(null);
  const { achimeneId } = useParams();

  const achimene = achimenes.find((achimen) => achimen._id === achimeneId);

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
      (collection) => collection.title === achimene.title
    );
    if (isExist) {
      toast.error("Ця квітка вже є у вашій колекції");
    } else {
      addCollection({ imgUrl: achimene.imgUrl, title: achimene.title });
    }
  };

  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.cardItem}>
          <img src={achimene.imgUrl} alt={achimene.title} className={s.img} />
        </div>
        <div className={s.cardDescr}>
          <h2 className={s.nameItem}>{achimene.title}</h2>
          <p className={s.descr}>{achimene.descr}</p>
          {/* <p className={s.price}>
            <span className={s.span}> Ціна:</span> {achimene.price}
          </p> */}
          <p className={s.price}>
            <span className={s.span}>Наявність: </span>
            {achimene.status}
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
