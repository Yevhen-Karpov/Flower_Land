// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import * as flowersApi from "../services/flovershelf-api";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function GeranDetailsView({ gerans }) {
  const { geranId } = useParams();
  const geran = gerans.find((geran) => geran._id === geranId);
  // const [geran, setGeran] = useState(null);
  // useEffect(() => {
  //   flowersApi.getGeranById(geranId).then(setGeran);
  // }, [geranId]);
  const onBack = () => {
    window.history.back();
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
          <button className={s.button} onClick={onBack}>
            Повернутись до колекції
          </button>
          <button className={s.button}>Додати до приватної колекції</button>
        </div>
      </div>
    </>
  );
}
