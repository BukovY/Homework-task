import React from "react";
import Pagination from "./Item/Pagination";
import s from "./Paginations.module.sass";
import { getPaginationRange } from "../../utils/functrions";
import { useSelector } from "react-redux";

const Paginations = () => {
  const { paginationMax } = useSelector((state) => state.appReducer);
  return (
    <div className={s.pagination_box}>
      {getPaginationRange(paginationMax).map((el) => (
        <Pagination key={el} num={el} />
      ))}
    </div>
  );
};

export default Paginations;
