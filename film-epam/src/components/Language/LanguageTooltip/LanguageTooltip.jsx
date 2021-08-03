import React, { useRef, useEffect } from "react";
import styles from "./LanguageTooltip.module.sass";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import { useSelector } from "react-redux";

const LanguageTooltip = ({ close }) => {
  const { languages } = useSelector((state) => state.app);

  return (
    <div className={styles.tooltip} onClick={() => close(false)}>
      <div className={styles.tooltip_box}>
        {languages.map((el) => (
          <LanguageSelect key={el} language={el} />
        ))}
      </div>
    </div>
  );
};
export default LanguageTooltip;
