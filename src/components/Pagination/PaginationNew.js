import React from "react";
import s from "./Pagination.module.css";

const PaginationNew = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={s.paginationWrap}>
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
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
    </div>
  );
};

export default PaginationNew;
