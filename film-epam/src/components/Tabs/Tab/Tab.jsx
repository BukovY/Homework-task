import React from "react";
import s from "./Tab.module.sass";
const Tab = ({ label, status, changeTab }) => {
  return (
    <div
      className={status === "active" ? `${s.tab} ${s.active}` : `${s.tab}`}
      onClick={() => changeTab(label)}
    >
      {label}
    </div>
  );
};
export default Tab;
