// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import * as flowersApi from "../services/flovershelf-api";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function GeranDetailsView({ gerans }) {
  const { geranId } = useParams();
  const geran = gerans.find((geran) => geran.id === Number(geranId));
  // const [geran, setGeran] = useState(null);
  // useEffect(() => {
  //   flowersApi.getGeranById(geranId).then(setGeran);
  // }, [geranId]);
  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.card}>
          <img src={geran.imgUrl} alt={geran.title} width={316} />
          <h2 className={s.name}>{geran.title}</h2>
        </div>

        <p className={s.descr}>{geran.descr}</p>
      </div>
    </>
  );
}
