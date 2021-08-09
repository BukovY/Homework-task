import React from "react";
import styles from "./Paginations.module.sass";
import { Pagination } from "./components/Parination";
import { getPaginationRange } from "../../utils/functrions";

export const Paginations = ({ selected, max, handler }) => {
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
