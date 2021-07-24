import React from "react";
import "./Tabs.css";
import { store } from "../../redux/store";
import Tab from "./Tab/Tab";
import { rerender } from "../../index";

const Tabs = () => {
  const tabs = store.tabs;
  const changeTab = (label) => {
    let tabs = [["Popular"], ["Top rated"], ["Upcoming"]];
    if (label === "Popular") {
      tabs[0].push("active");
    }
    if (label === "Top rated") {
      tabs[1].push("active");
    }
    if (label === "Upcoming") {
      tabs[2].push("active");
    }
    store.tabs = tabs;
    store.isTooltipLanguageOpen = false;
    rerender();
  };
  return (
    <div>
      <div className="tabs">
        {tabs.map((el) => (
          <Tab
            key={el[0]}
            label={el[0]}
            status={el[1] === "active" ? "active" : "default"}
            changeTab={changeTab}
          />
        ))}
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default Tabs;
