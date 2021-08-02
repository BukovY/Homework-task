import React from "react";
import styles from "./LanguageSelect.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setLanguage,
  isTooltipOpen,
} from "../../../../redux/actions/appAction";

const LanguageSelect = ({ language }) => {
  const { languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const selectLanguage = (language) => {
    dispatch(setLanguage(language));
    dispatch(isTooltipOpen(false));
  };
  return (
    <div
      className={
        language === languageSelected
          ? `${styles.tooltip_select}`
          : `${styles.tooltip_language}`
      }
      onClick={() => selectLanguage(language)}
    >
      {language}
    </div>
  );
};
export default LanguageSelect;
