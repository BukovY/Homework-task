import React from "react";
import s from "./Pagination.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { paginationChange } from "../../../redux/actions/appAction";

const Pagination = ({ num }) => {
  const { paginationPage } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  return (
    <div
      className={
        num === paginationPage
          ? `${s.pagination} ${s.pagination_active}`
          : `${s.pagination}`
      }
      onClick={() => dispatch(paginationChange(num))}
    >
      {num}
    </div>
  );
};

export default Pagination;
