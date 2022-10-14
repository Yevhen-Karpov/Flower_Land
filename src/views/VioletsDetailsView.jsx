// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";
// import getVioletById from "../services/ApiServices";
// import * as flowersApi from "../services/flovershelf-api";

export default function VioletsDetailsView({ violets }) {
  const { violetId } = useParams();
  console.log(violets);
  const violet = violets.find((violet) => violet._id === violetId);
  // const [violet, setViolet] = useState(null);
  // useEffect(() => {
  //   getVioletById(violetId).then(setViolet);
  // }, [violetId]);
  const onBack = () => {
    window.history.back();
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
          <button className={s.button}>Додати до приватної колекції</button>
        </div>
      </div>
    </>
  );
}
