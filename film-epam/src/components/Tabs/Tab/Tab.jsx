import React from "react";
import styles from "./Tab.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  isTooltipOpen,
  isHomepageNeedUpdate,
} from "../../../redux/actions/appAction";

const Tab = ({ label }) => {
  const { activeFilter } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const changeTab = (label) => {
    dispatch(setFilter(label));
    dispatch(isTooltipOpen(false));
    dispatch(isHomepageNeedUpdate(true));
  };
  return (
    <div
      className={
        label === activeFilter ? `${styles.tab_active}` : `${styles.tab}`
      }
      onClick={() => changeTab(label)}
    >
      {label}
    </div>
  );
};
export default Tab;
