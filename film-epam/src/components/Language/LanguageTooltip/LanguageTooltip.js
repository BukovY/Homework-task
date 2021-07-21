import React from "react";
import {store} from "../../../redux/store";
import './LanguageTooltip.css'
import LanguageSelect from "./LanguageSelect/LanguageSelect";

const LanguageTooltip = () => {
    const languages = store.languages
    const selectLanguage = store.languageSelected
    return (<div className='tooltip'>
        <div className='tooltip_box'>
            {languages.map((el) => <LanguageSelect key={el} language={el} isSelect={el === selectLanguage}/>)}
        </div>
    </div>);
}
export default LanguageTooltip