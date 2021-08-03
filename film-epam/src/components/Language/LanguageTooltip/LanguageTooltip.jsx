import React from "react";
import styles from "./LanguageTooltip.module.sass";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import { useSelector } from "react-redux";
import { langTranslation } from "../../../static/Translation";
import { getIndexLanguage } from "../../../utils/functrions";

const LanguageTooltip = ({ close }) => {
  const { languages, languageSelected } = useSelector((state) => state.app);
  const langInd = getIndexLanguage(languageSelected);

  return (
    <div className={styles.tooltip} onClick={() => close(false)}>
      <div className={styles.tooltip_box}>
        {languages.map((el, ind) => (
          <LanguageSelect
            key={el}
            language={el}
            display={langTranslation[ind][langInd]}
          />
        ))}
      </div>
    </div>
  );
};
export default LanguageTooltip;
