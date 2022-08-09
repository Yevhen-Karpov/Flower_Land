// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";
// import * as flowersApi from "../services/flovershelf-api";

export default function VioletsDetailsView({ violets }) {
  const { violetId } = useParams();
  const violet = violets.find((violet) => violet.id === Number(violetId));
  // const [violet, setViolet] = useState(null);
  // useEffect(() => {
  //   flowersApi.getVioletById(violetId).then(setViolet);
  // }, [violetId]);
  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.card}>
          <img src={violet.imgUrl} alt={violet.title} width={316} />
          <h2 className={s.name}>{violet.title}</h2>
        </div>
        <p className={s.descr}>{violet.descr}</p>
      </div>
    </>
  );
}
