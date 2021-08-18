import React from "react";
import styles from "./LanguageTooltip.module.sass";
import { LanguageSelect } from "../LanguageSelect";
import { useSelector } from "react-redux";
import { langTranslation } from "../../../../static/Translation";
import { getIndexLanguage } from "../../../../utils/functrions";
import { RootState } from "../../../../redux/store";

export const LanguageTooltip = (props: { close: any }) => {
  const { languages, languageSelected } = useSelector(
    (state: RootState) => state.app
  );
  const langInd = getIndexLanguage(languageSelected);

  return (
    <div className={styles.tooltip} onClick={() => props.close(false)}>
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
