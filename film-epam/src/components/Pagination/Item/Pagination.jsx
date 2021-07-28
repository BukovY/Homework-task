import React from "react";
import styles from "./Pagination.module.sass";

const Pagination = ({ num, isSelect, handler }) => {
  const selectPaginationPage = () => {
    handler(num);
  };
  return (
    <div
      className={
        isSelect ? `${styles.pagination_active}` : `${styles.pagination}`
      }
      onClick={selectPaginationPage}
    >
      {num}
    </div>
  );
};

export default Pagination;
