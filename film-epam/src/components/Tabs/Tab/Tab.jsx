import React from "react";
import styles from "./Tab.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/actions/appAction";
import classNames from "classnames/bind";
import { getIndexLanguage } from "../../../utils/functrions";

const Tab = ({ label, display }) => {
  const { activeFilter, languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const changeTab = (label) => {
    dispatch(setFilter(label));
  };
  const cx = classNames.bind(styles);
  const tabClass = cx("tab", { active: label === activeFilter });
  return (
    <div className={tabClass} onClick={() => changeTab(label)}>
      {display[getIndexLanguage(languageSelected)]}
    </div>
  );
};
export default Tab;
