import React from "react";
import s from "./Tabs.module.sass";
import { store } from "../../redux/store";
import Tab from "./Tab/Tab";
import { rerender } from "../../index";
import { getTabs } from "../../utils/functrions";

const Tabs = () => {
  const tabs = store.tabs;
  const changeTab = (label) => {
    store.tabs = getTabs(label);
    store.isTooltipLanguageOpen = false;
    rerender();
  };
  return (
    <div>
      <div className={s.tabs}>
        {tabs.map((el) => (
          <Tab
            key={el[0]}
            label={el[0]}
            status={el[1] === "active" ? "active" : "default"}
            changeTab={changeTab}
          />
        ))}
      </div>
      <div className={s.clearfix}></div>
    </div>
  );
};

export default Tabs;
