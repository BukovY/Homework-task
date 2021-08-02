import React from "react";
import styles from "./Language.module.sass";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";
import { useDispatch, useSelector } from "react-redux";
import { isTooltipOpen } from "../../redux/actions/appAction";
import classNames from "classnames";

const Language = () => {
  const { isTooltipLanguageOpen, languageSelected } = useSelector(
    (state) => state.app
  );
  const dispatch = useDispatch();
  const toggleTooltip = () => {
    dispatch(isTooltipOpen(!isTooltipLanguageOpen));
  };
  const languageClass = classNames(
    { isTooltipLanguageOpen: styles.language_select_open },
    styles.language_select
  );

  return (
    <div>
      <div onClick={toggleTooltip} className={languageClass}>
        {languageSelected}
      </div>
      {isTooltipLanguageOpen && <LanguageTooltip />}
    </div>
  );
};

export default Language;
