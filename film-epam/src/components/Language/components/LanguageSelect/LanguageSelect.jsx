import React from "react";
import styles from "./LanguageSelect.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../../redux/actions/appAction";
import classNames from "classnames/bind";

export const LanguageSelect = ({ language, display }) => {
  const { languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const selectLanguage = (language) => {
    dispatch(setLanguage(language));
  };
  const cx = classNames.bind(styles);
  const languageClass = cx("tooltip", {
    select: languageSelected === language,
  });
  return (
    <div className={languageClass} onClick={() => selectLanguage(language)}>
      {display}
    </div>
  );
};
