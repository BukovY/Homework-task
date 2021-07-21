import React from "react";
import {store} from "../../../../redux/store";
import {rerender} from "../../../../index";
import './LanguageSelect.css'

const LanguageSelect = ({language, isSelect}) => {
    const languageSelect = (el) => {
        store.languageSelected = el
        store.isTooltipLanguageOpen = false
        rerender()
    }
    return (<div onClick={() => languageSelect(language)}
                 className={isSelect ? 'tooltip_language tooltip_select' : 'tooltip_language'}>
        {language}
    </div>);
}
export default LanguageSelect