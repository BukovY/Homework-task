import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  languageChange,
  tooltipOpenChange,
} from "../../../../redux/actions/appAction";
import s from "./LanguageSelect.module.sass";

const LanguageSelect = ({ language }) => {
  const { languageSelected } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const selectLanguage = (language) => {
    dispatch(languageChange(language));
    dispatch(tooltipOpenChange(false));
  };
  return (
    <div
      className={
        language === languageSelected
          ? `${s.tooltip_language} ${s.tooltip_select}`
          : `${s.tooltip_language}`
      }
      onClick={() => selectLanguage(language)}
    >
      {language}
    </div>
  );
};
export default LanguageSelect;
