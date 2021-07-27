import React from "react";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";
import styles from "./Language.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setTooltipOpenStatus } from "../../redux/actions/appAction";

const Language = () => {
  const { isTooltipLanguageOpen, languageSelected } = useSelector(
    (state) => state.appReducer
  );
  const dispatch = useDispatch();
  const toggleTooltip = () => {
    dispatch(setTooltipOpenStatus(!isTooltipLanguageOpen));
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
