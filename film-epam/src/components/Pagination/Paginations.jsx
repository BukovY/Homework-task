import React from "react";
import Pagination from "./Item/Pagination";
import styles from "./Paginations.module.sass";
import { getPaginationRange } from "../../utils/functrions";
import { useSelector } from "react-redux";
// selected={paginationPage} max={paginationMax} handler={selectPaginationPage}
const Paginations = ({ selected, max, handler }) => {
  return (
    <div className={styles.pagination_box}>
      {getPaginationRange(max).map((el) => (
        <Pagination
          key={el}
          num={el}
          isSelect={el === selected}
          handler={handler}
        />
      ))}
    </div>
  );
};

export default Paginations;
