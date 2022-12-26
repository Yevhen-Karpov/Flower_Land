import React from "react";
import s from "./Pagination.module.css";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const PaginationNew = ({
  itemsPerPage,
  totalItems,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.wrapper}>
      <button type="button" className={s.btn} onClick={prevPage}>
        <BsChevronDoubleLeft />
      </button>
      <ul className={s.paginationWrap}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              className={s.btn}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className={s.btn} onClick={nextPage}>
        <BsChevronDoubleRight />
      </button>
    </div>
  );
};

export default PaginationNew;
