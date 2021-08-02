import React from "react";
import styles from "./LanguageSelect.module.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  setLanguage,
  isTooltipOpen,
} from "../../../../redux/actions/appAction";
import classNames from "classnames/bind";

const LanguageSelect = ({ language }) => {
  const { languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const selectLanguage = (language) => {
    dispatch(setLanguage(language));
    dispatch(isTooltipOpen(false));
  };
  const cx = classNames.bind(styles);
  const languageClass = cx("tooltip", {
    select: languageSelected === language,
  });
  return (
    <div className={languageClass} onClick={() => selectLanguage(language)}>
      {language}
    </div>
  );
};
export default LanguageSelect;
