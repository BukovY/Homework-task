import React from "react";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";
import s from "./Language.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setTooltipOpenStatus } from "../../redux/actions/appAction";

const Language = () => {
  const { isTooltipLanguageOpen, languageSelected } = useSelector(
    (state) => state.appReducer
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() => {
          dispatch(setTooltipOpenStatus(!isTooltipLanguageOpen));
        }}
        className={
          isTooltipLanguageOpen
            ? `${s.language_select} ${s.open}`
            : `${s.language_select}`
        }
      >
        {languageSelected}
      </div>
      {isTooltipLanguageOpen ? <LanguageTooltip /> : ""}
    </div>
  );
};

export default Language;
