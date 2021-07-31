import React from "react";
import styles from "./Paginations.module.sass";
import Pagination from "./Item/Pagination";
import { getPaginationRange } from "../../utils/functrions";

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
