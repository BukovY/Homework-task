import React from "react";
import styles from "./Tab.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilter,
  isHomepageNeedUpdate,
} from "../../../redux/actions/appAction";
import classNames from "classnames/bind";

const Tab = ({ label, display }) => {
  const { activeFilter, languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const changeTab = (label) => {
    dispatch(setFilter(label));
    dispatch(isHomepageNeedUpdate(true));
  };
  const cx = classNames.bind(styles);
  const tabClass = cx("tab", { active: label === activeFilter });
  return (
    <div className={tabClass} onClick={() => changeTab(label)}>
      {languageSelected === "EN"
        ? display[0]
        : languageSelected === "RU"
        ? display[1]
        : display[2]}
    </div>
  );
};
export default Tab;
