import React, { FC } from "react";
import styles from "./LanguageTooltip.module.sass";
import { LanguageSelect } from "../LanguageSelect";
import { useSelector } from "react-redux";
import { langTranslation } from "../../../../static/Translation";
import { getIndexLanguage } from "../../../../utils/functrions";
import { RootState } from "../../../../redux/store";

type LanguageTooltipProps = {
  close: (value: boolean) => void;
};
export const LanguageTooltip: FC<LanguageTooltipProps> = ({ close }) => {
  const { languages, languageSelected } = useSelector(
    (state: RootState) => state.app
  );
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
