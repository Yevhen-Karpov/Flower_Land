import { useEffect, useState } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import { getGerans } from "../../services/ApiServices";
import GeranDetailsView from "../../views/GeranDetailsView";
import PaginationNew from "../../components/Pagination/PaginationNew";
import { animateScroll as scroll } from "react-scroll";
import s from "./GeranPage.module.css";

export default function GeranPage() {
  const { url, path } = useRouteMatch();
  const [gerans, setGerans] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);

  useEffect(() => {
    getGerans().then(setGerans);
    scroll.scrollMore(400);
  }, []);

  const lastIndex = currentPage * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const currentGerans = gerans.slice(firstIndex, lastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

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
      <h2 className={s.title}>
        Деякі зображення квітів у колекції можуть не відповідати наявним, а є
        лише прикладом цвітіння даного сорту.
        <span className={s.span1}>
          Щоб дізнатись докладніше, натисни на зображення.
        </span>
      </h2>
      {gerans && (
        <ul className={s.wrapper}>
          {currentGerans.map((geran) => (
            <li
              key={geran._id}
              className={s.card}
              onClick={() => scroll.scrollMore(600)}
            >
              <Link
                to={`${url}/${geran._id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={geran.imgUrl} alt={geran.title} className={s.img} />
                <p className={s.name}>{geran.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <PaginationNew
        itemsPerPage={commentsPerPage}
        totalItems={gerans.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Route path={`${path}/:geranId`}>
        {gerans && <GeranDetailsView gerans={gerans} />}
      </Route>
    </div>
  );
}
