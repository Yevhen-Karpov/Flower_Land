import { useParams } from "react-router-dom";
import s from "../pages/AchimenesPage/AchimenesPage.module.css";

export default function AchimenesDetailsView({ achimenes }) {
  const { achimeneId } = useParams();
  const achimen = achimenes.find(
    (achimen) => achimen.id === Number(achimeneId)
  );

  return (
    <>
      <hr />
      <div className={s.cardView}>
        <div className={s.card}>
          <img src={achimen.imgUrl} alt={achimen.title} width={316} />
          <h2 className={s.name}>{achimen.title}</h2>
        </div>

        <p className={s.descr}>{achimen.descr}</p>
      </div>
    </>
  );
}
