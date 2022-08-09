import { useState, useEffect } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import { getViolets } from "../../services/flovershelf-api";
import VioletsDetailsView from "../../views/VioletsDetailsView";
import s from "./VioletsPage.module.css";

export default function ViolesPage() {
  const { url, path } = useRouteMatch();
  const [violets, setViolets] = useState(null);
  useEffect(() => {
    getViolets().then(setViolets);
  }, []);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Фіалки</h1>
      <p className={s.text}>
        Фіалка (Viola) — рід квіткових рослин родини фіалкових, що містить від
        200—500 видів у всьому світі. Фіалки зазвичай ростуть у вологих і злегка
        затінених умовах. Кімнатна фіалка - одна з найулюбленіших кімнатних
        квітів у багатьох садівників. Завдяки різноманітності забарвлень і
        достатній простоті у догляді ці квіти користуються величезною
        популярністю. За описом кімнатні фіалки схожі між собою, однак, є ряд
        відмінностей. В основному це стосується відтінків суцвіть і форми листя.
        Рослина являє собою розетку з листя, центральне стебло, у якого
        відсутнє. В середині формуються невеликі квітки, форма їх може бути
        простою або химерною. Забарвлення пелюсток і листя різноманітне. Розетка
        по формі різниться від простої до дуже махрової. Якщо за фіалками
        правильно доглядати, то вони не принесуть абсолютно ніяких турбот своєму
        власникові. Багато квітникарів збирають цілі колекції цих ефектних
        квіточок, так як різновидів і сортів їх існує велика кількість.
        Незважаючи на те, що в колекції може налічуватися велика кількість
        екземплярів, доглядати за ними досить просто. Справа в тому, що
        доглядати за ними потрібно однаково, а це, безумовно, робить життя
        «колекціонера», та й простого квітникаря набагато легшим.
      </p>
      {violets && (
        <ul className={s.wrapper}>
          {violets.map((violet) => (
            <li key={violet.id} className={s.card}>
              <img src={violet.imgUrl} alt={violet.title} className={s.img} />
              <Link to={`${url}/${violet.id}`} className={s.name}>
                {violet.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Route path={`${path}/:violetId`}>
        {violets && <VioletsDetailsView violets={violets} />}
      </Route>
    </div>
  );
}
