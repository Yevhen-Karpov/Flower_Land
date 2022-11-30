import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import { addCollection } from "../services/ApiServices";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function AchimenesDetailsView({ achimenes }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { achimeneId } = useParams();

  const achimene = achimenes.find((achimen) => achimen._id === achimeneId);

  const onBack = () => {
    window.history.back();
  };

  const onAddToCollection = () => {
    addCollection({ imgUrl: achimene.imgUrl, title: achimene.title });
  };

  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.card}>
          <img src={achimene.imgUrl} alt={achimene.title} className={s.img} />
          <h2 className={s.name}>{achimene.title}</h2>
        </div>
        <div className={s.cardDescr}>
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
