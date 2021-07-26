import React from "react";
import s from "./Tabs.module.sass";
import Tab from "./Tab/Tab";
import { useSelector } from "react-redux";

/*
const initialState = {
  paginationPage: 1,
  paginationMax: 5,
  search: "",
  languageSelected: "EN",
  languages: ["EN", "RU", "FR"],
  filter: [["Popular"], ["Top rated"], ["Upcoming"]],
  activeFilter: 'Popular',
  isTooltipLanguageOpen: false,
};
 */
const Tabs = () => {
  const { filter } = useSelector((state) => state.appReducer);

  return (
    <div>
      <div className={s.tabs}>
        {filter.map((el) => (
          <Tab key={el} label={el} />
        ))}
      </div>
      <div className={s.clearfix}></div>
    </div>
  );
};

export default Tabs;
