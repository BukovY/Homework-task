import React from "react";
import s from "./Tab.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  setTooltipOpenStatus,
} from "../../../redux/actions/appAction";

const Tab = ({ label }) => {
  const { activeFilter } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const changeTab = (label) => {
    dispatch(setFilter(label));
    dispatch(setTooltipOpenStatus(false));
  };
  return (
    <div
      className={label === activeFilter ? `${s.tab} ${s.active}` : `${s.tab}`}
      onClick={() => changeTab(label)}
    >
      {label}
    </div>
  );
};
export default Tab;
