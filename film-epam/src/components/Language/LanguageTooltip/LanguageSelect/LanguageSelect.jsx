import React from "react";
import {store} from "../../../../redux/store";
import {rerender} from "../../../../index";
import s from './LanguageSelect.module.sass'

const LanguageSelect = ({language, isSelect}) => {
    const languageSelect = (el) => {
        store.languageSelected = el
        store.isTooltipLanguageOpen = false
        rerender()
    }
    return (<div onClick={() => languageSelect(language)}
                 className={isSelect ? `${s.tooltip_language} ${s.tooltip_select}` : `${s.tooltip_language}`}>
        {language}
    </div>);
}
export default LanguageSelect