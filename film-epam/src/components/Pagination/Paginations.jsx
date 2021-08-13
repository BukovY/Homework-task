import React from "react";
import styles from "./Paginations.module.sass";
import Pagination from "@material-ui/lab/Pagination";

export const Paginations = ({ selected, max, handler }) => {
  const handleChange = (e, value) => {
    handler(value);
  };
  return (
    <div className={styles.pagination_box}>
      <Pagination
        variant="outlined"
        boundaryCount={max}
        color="primary"
        count={max}
        defaultPage={selected}
        onChange={handleChange}
      />
    </div>
  );
};
