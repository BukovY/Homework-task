import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLanguage,
  setTooltipOpenStatus,
} from "../../../../redux/actions/appAction";
import s from "./LanguageSelect.module.sass";

const LanguageSelect = ({ language }) => {
  const { languageSelected } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const selectLanguage = (language) => {
    dispatch(setLanguage(language));
    dispatch(setTooltipOpenStatus(false));
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
