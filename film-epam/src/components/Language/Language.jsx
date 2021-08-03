import React, { useEffect } from "react";
import styles from "./Language.module.sass";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { getGenresMap } from "../../redux/reducers/appReducers";
import { useComponentVisible } from "../../utils/customHoocs";
import { getIndexLanguage } from "../../utils/functrions";
import { langTranslation } from "../../static/Translation";

const Language = () => {
  const { languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresMap(languageSelected));
  }, [languageSelected]);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const cx = classNames.bind(styles);
  const langClass = cx("language_select", { open: isComponentVisible });
  const langInd = getIndexLanguage(languageSelected);

  return (
    <div ref={ref}>
      <div
        className={langClass}
        onClick={() =>
          isComponentVisible
            ? setIsComponentVisible(false)
            : setIsComponentVisible(true)
        }
      >
        {langTranslation[langInd][langInd]}
      </div>
      {isComponentVisible && <LanguageTooltip close={setIsComponentVisible} />}
    </div>
  );
};

export default Language;
