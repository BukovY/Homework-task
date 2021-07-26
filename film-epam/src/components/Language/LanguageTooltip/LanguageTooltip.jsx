import React from "react";
import s from "./LanguageTooltip.module.sass";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import { useSelector } from "react-redux";

const LanguageTooltip = () => {
  const { languages } = useSelector((state) => state.appReducer);

  return (
    <div className={s.tooltip}>
      <div className={s.tooltip_box}>
        {languages.map((el) => (
          <LanguageSelect key={el} language={el} />
        ))}
      </div>
    </div>
  );
};
export default LanguageTooltip;
