import React from "react";
import styles from "./Language.module.sass";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";
import { useDispatch, useSelector } from "react-redux";
import { isTooltipOpen } from "../../redux/actions/appAction";

const Language = () => {
  const { isTooltipLanguageOpen, languageSelected } = useSelector(
    (state) => state.appReducer
  );
  const dispatch = useDispatch();
  const toggleTooltip = () => {
    dispatch(isTooltipOpen(!isTooltipLanguageOpen));
  };
  return (
    <div>
      <div
        onClick={toggleTooltip}
        className={
          isTooltipLanguageOpen
            ? `${styles.language_select_open}`
            : `${styles.language_select}`
        }
      >
        {languageSelected}
      </div>
      {isTooltipLanguageOpen ? <LanguageTooltip /> : ""}
    </div>
  );
};

export default Language;
