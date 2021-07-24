import React from "react";
import s from "./Pagination.module.sass";

const Pagination = ({ num, active, changePaginationPage }) => {
  return (
    <div
      className={
        active ? `${s.pagination} ${s.pagination_active}` : `${s.pagination}`
      }
      onClick={() => changePaginationPage(num)}
    >
      {num}
    </div>
  );
};

export default Pagination;
