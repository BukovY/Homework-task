import React from "react";
import { store } from "../../redux/store";
import { rerender } from "../../index";
import "./Language.css";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";

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
          isOpen ? "language_select language_select_open" : "language_select"
        }
      >
        {languageSelected}
      </div>
      {isOpen ? <LanguageTooltip /> : ""}
    </div>
  );
};

export default Language;
