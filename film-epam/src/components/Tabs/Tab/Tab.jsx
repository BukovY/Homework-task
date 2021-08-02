import React from "react";
import styles from "./Tab.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  isTooltipOpen,
  isHomepageNeedUpdate,
} from "../../../redux/actions/appAction";
import classNames from "classnames/bind";

const Tab = ({ label }) => {
  const { activeFilter } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const changeTab = (label) => {
    dispatch(setFilter(label));
    dispatch(isTooltipOpen(false));
    dispatch(isHomepageNeedUpdate(true));
  };
  const cx = classNames.bind(styles);
  const tabClass = cx("tab", { active: label === activeFilter });
  return (
    <div className={tabClass} onClick={() => changeTab(label)}>
      {label}
    </div>
  );
};
export default Tab;
