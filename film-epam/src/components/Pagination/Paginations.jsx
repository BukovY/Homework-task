import React from "react";
import { store } from "../../redux/store";
import Pagination from "./Item/Pagination";
import s from "./Paginations.module.sass";
import { rerender } from "../../index";
import { getPaginationRange } from "../../utils/functrions";

const Paginations = () => {
  const maxPage = store.paginationMax;
  const selectPage = store.paginationPage;

  const changePaginationPage = (el) => {
    store.paginationPage = el;
    store.isTooltipLanguageOpen = false;
    rerender();
  };
  return (
    <div className={s.pagination_box}>
      {getPaginationRange(maxPage).map((el) => (
        <Pagination
          key={el}
          num={el}
          active={el === selectPage}
          changePaginationPage={changePaginationPage}
        />
      ))}
    </div>
  );
};

export default Paginations;
