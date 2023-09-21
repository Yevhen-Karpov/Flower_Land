import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { getAchimenes } from "../../services/ApiServices";
import PaginationNew from "../../components/Pagination/PaginationNew";
import s from "./AchimenesPage.module.css";

export default function AchimenesPage() {
  const [achimenes, setAchimenes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  useEffect(() => {
    getAchimenes().then(setAchimenes);
    scroll.scrollMore(400);
  }, []);
  console.log(achimenes);
  const lastIndex = currentPage * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const currentAchimenes = achimenes.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

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
      <h2 className={s.title}>
        Деякі зображення квітів у колекції можуть не відповідати наявним, а є
        лише прикладом цвітіння даного сорту.
        <span className={s.span1}>
          Щоб дізнатись докладніше, натисни на зображення.
        </span>
      </h2>
      {achimenes.length && (
        <ul className={s.wrapper}>
          {currentAchimenes.map(
            (achimen) =>
              achimen.active === true && (
                <li
                  key={achimen._id}
                  className={s.card}
                  onClick={() => scroll.scrollMore(600)}
                >
                  <Link
                    to={`${achimen._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={achimen.imgUrl}
                      alt={achimen.title}
                      className={s.img}
                    />
                    <p className={s.name}>{achimen.title}</p>
                  </Link>
                </li>
              )
          )}
        </ul>
      )}

      <PaginationNew
        itemsPerPage={commentsPerPage}
        totalItems={achimenes.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <Outlet />
    </div>
  );
}
