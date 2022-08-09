import { useEffect, useState } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import { getGeran } from "../../services/flovershelf-api";
import GeranDetailsView from "../../views/GeranDetailsView";
import s from "./GeranPage.module.css";

export default function GeranPage() {
  const { url, path } = useRouteMatch();
  const [gerans, setGerans] = useState(null);
  useEffect(() => {
    getGeran().then(setGerans);
  }, []);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Герані</h1>
      <p className={s.text}>
        Кімнатна герань, або пеларгонія стала одним з улюблених домашніх рослин
        і завдяки невибагливості до догляду. В сільських хатах частіше
        зустрічається рожева пеларгонія. Квіти її не відрізняються особливою
        красою, зате більш витончені її листя, з красивою хвилястою лінією краю.
        Проте сприймати її виключно як декор неправильно. Геpань — справжній
        домашній доктор. Вона здатна допомогти впоратися з безсонням, допомагає
        людям, що страждають неврастенією, гіпертонією, серцевими захворюваннями
        та хворобами шлунково-кишкового тракту.Існує і чимало протипоказань до
        застосування пеларгонії в лікувальних цілях. Кімнатна рослина має
        характерний запах і містить активні діючі речовини, які можуть бути
        шкідливі при певних умовах. Тому перш ніж поселити у себе в будинку цю
        рослину або почати використовувати її в лікувальних цілях, важливо
        переконатися, що це не буде шкідливим.
      </p>
      {gerans && (
        <ul>
          {gerans.map((geran) => (
            <li key={geran.id}>
              <img src={geran.imgUrl} alt={geran.title} width={200} />
              <Link to={`${url}/${geran.id}`}>{geran.title}</Link>
            </li>
          ))}
        </ul>
      )}

      <Route path={`${path}/:geranId`}>
        {gerans && <GeranDetailsView gerans={gerans} />}
      </Route>
    </div>
  );
}
