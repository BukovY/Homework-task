import React from "react";
import styles from "./Pagination.module.sass";
import classNames from "classnames/bind";

const Pagination = ({ num, isSelect, handler }) => {
  const selectPaginationPage = () => {
    handler(num);
  };
  const cx = classNames.bind(styles);
  const paginationClass = cx("pagination", { active: isSelect });
  return (
    <div className={paginationClass} onClick={selectPaginationPage}>
      {num}
    </div>
  );
};

export default Pagination;
