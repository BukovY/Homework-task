import React from "react";
import styles from "./Tabs.module.sass";
import { Tab } from "./components/Tab";
import { useSelector } from "react-redux";
import { tabTranslation } from "../../static/Translation";

export const Tabs = () => {
  const { filter } = useSelector((state) => state.app);

  return (
    <div className={styles.flexToCenter}>
      <div className={styles.tabs}>
        {filter.map((el, index) => (
          <Tab key={el} label={el} display={tabTranslation[index]} />
        ))}
      </div>
      <div className={styles.clearFix}></div>
    </div>
  );
};
