import { useState, useEffect } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import { getAchimenes } from "../../services/flovershelf-api";
import AchimenesDetailsView from "../../views/AchimenesDetailsView";
import s from "./AchimenesPage.module.css";

export default function AchimenesPage() {
  const { url, path } = useRouteMatch();
  const [achimenes, setAchimenes] = useState(null);

  useEffect(() => {
    getAchimenes().then(setAchimenes);
  }, []);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Ахіменеси</h1>
      <p className={s.text}>
        Ахіменес – це рослина з гарними оксамитовими листочками, квітка тішить
        рясним та довготривалим цвітінням. Гарно виглядає в підвісних кошиках.
        На зиму рослина відмирає, а в грунті залишаються бульби. Ахіменес -
        багаторічна сезонна рослина, родич фіалки, відноситься до сімейства
        геснерієвих, досягає у висоту 30-60 см. Квітки: трубчасті, червоного,
        рожевого, білого, фіолетового кольорів. І пагони, і квітки дуже крихкі,
        і легко ламаються. Щоб кущики були красивіші, прищипують їх кінчики.
        Рослина має чітко виражений період спокою, який може тривати 4-5
        місяців. На зиму, коли він починається, ахіменес обрізають, а бульби
        ховають в темне прохолодне місце.
      </p>
      {achimenes && (
        <ul className={s.wrapper}>
          {achimenes.map((achimen) => (
            <li key={achimen.id} className={s.card}>
              <img src={achimen.imgUrl} alt={achimen.title} className={s.img} />
              <Link to={`${url}/${achimen.id}`} className={s.name}>
                {achimen.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Route path={`${path}/:achimeneId`}>
        {achimenes && <AchimenesDetailsView achimenes={achimenes} />}
      </Route>
    </div>
  );
}
