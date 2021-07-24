import React from "react";
import { store } from "../../redux/store";
import { rerender } from "../../index";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";
import s from "./Language.module.sass";

const Language = () => {
  const isOpen = store.isTooltipLanguageOpen;
  const languageSelected = store.languageSelected;
  const openLanguageSelect = () => {
    store.isTooltipLanguageOpen = !isOpen;
    rerender();
  };
  return (
    <div>
      <div
        onClick={() => {
          openLanguageSelect();
        }}
        className={
          isOpen ? `${s.language_select} ${s.open}` : `${s.language_select}`
        }
      >
        {languageSelected}
      </div>
      {isOpen ? <LanguageTooltip /> : ""}
    </div>
  );
};

export default Language;
