import React, { FC } from "react";
import styles from "./LanguageSelect.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../../redux/actions/appAction";
import classNames from "classnames/bind";
import { RootState } from "../../../../redux/store";

type LanguageSelectProps = {
  language: string;
  display: string;
};
export const LanguageSelect: FC<LanguageSelectProps> = ({
  language,
  display,
}) => {
  const { languageSelected } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const selectLanguage = (language: string) => {
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
