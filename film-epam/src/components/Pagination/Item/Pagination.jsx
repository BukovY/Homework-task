import React from "react";
import s from "./Pagination.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setPaginationPage,
  setTooltipOpenStatus,
} from "../../../redux/actions/appAction";

const Pagination = ({ num }) => {
  const { paginationPage } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const selectPaginationPage = () => {
    dispatch(setPaginationPage(num));
    dispatch(setTooltipOpenStatus(false));
  };
  return (
    <div
      className={
        num === paginationPage
          ? `${s.pagination} ${s.pagination_active}`
          : `${s.pagination}`
      }
      onClick={() => selectPaginationPage()}
    >
      {num}
    </div>
  );
};

export default Pagination;