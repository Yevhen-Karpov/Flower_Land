import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { getViolets } from "../../services/ApiServices";
import PaginationNew from "../../components/Pagination/PaginationNew";
import s from "./VioletsPage.module.css";

export default function ViolesPage() {
  const [violets, setViolets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  useEffect(() => {
    getViolets().then(setViolets);
    scroll.scrollMore(400);
  }, []);

  const lastIndex = currentPage * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const currentViolets = violets.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

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
      <h2 className={s.title}>
        Деякі зображення квітів у колекції можуть не відповідати наявним, а є
        лише прикладом цвітіння даного сорту.
        <span className={s.span1}>
          Щоб дізнатись докладніше, натисни на зображення.
        </span>
      </h2>
      {violets && (
        <ul className={s.wrapper}>
          {currentViolets.map((violet) => (
            <li
              key={violet._id}
              className={s.card}
              onClick={() => scroll.scrollMore(600)}
            >
              <Link to={`${violet._id}`} style={{ textDecoration: "none" }}>
                <img src={violet.imgUrl} alt={violet.title} className={s.img} />
                <p className={s.name}>{violet.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <PaginationNew
        itemsPerPage={commentsPerPage}
        totalItems={violets.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <Outlet />
    </div>
  );
}
