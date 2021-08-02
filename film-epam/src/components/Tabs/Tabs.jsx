import React from "react";
import styles from "./Tabs.module.sass";
import Tab from "./Tab/Tab";
import { useSelector } from "react-redux";

const Tabs = () => {
  const { filter } = useSelector((state) => state.app);

  return (
    <div>
      <div className={styles.tabs}>
        {filter.map((el) => (
          <Tab key={el} label={el} />
        ))}
      </div>
      <div className={styles.clearFix}></div>
    </div>
  );
};

export default Tabs;
