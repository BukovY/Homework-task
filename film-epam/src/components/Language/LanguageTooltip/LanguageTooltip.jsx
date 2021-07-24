import React from "react";
import { store } from "../../../redux/store";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import s from "./LanguageTooltip.module.sass";

const LanguageTooltip = () => {
  const languages = store.languages;
  const selectLanguage = store.languageSelected;
  return (
    <div className={s.tooltip}>
      <div className={s.tooltip_box}>
        {languages.map((el) => (
          <LanguageSelect
            key={el}
            language={el}
            isSelect={el === selectLanguage}
          />
        ))}
      </div>
    </div>
  );
};
export default LanguageTooltip;
