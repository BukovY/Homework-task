import React from "react";
import { store } from "../../redux/store";
import { MAX_PAGINATION_PAGES } from "../../redux/constants";
import Pagination from "./Item/Pagination";
import s from "./Paginations.module.sass"
import { rerender } from "../../index";

const Paginations = () => {
  const maxPage = MAX_PAGINATION_PAGES;
  const selectPage = store.paginationPage;
  const pagination = Array(maxPage)
    .fill(1)
    .reduce((prev, next, index) => {
      return [...prev, index + 1];
    }, []);

  const changePaginationPage = (el) => {
    store.paginationPage = el;
    store.isTooltipLanguageOpen = false;
    rerender();
  };
  return (
    <div className={s.pagination_box}>
      {pagination.map((el) => (
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
