import React, { useEffect, useRef, useState } from "react";
import styles from "./Language.module.sass";
import LanguageTooltip from "./LanguageTooltip/LanguageTooltip";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { getGenresMap } from "../../redux/reducers/appReducers";
import { useComponentVisible } from "../../utils/customHoocs";

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

  return (
    <div ref={ref}>
      <div className={langClass} onClick={() => setIsComponentVisible(true)}>
        {languageSelected}
      </div>
      {isComponentVisible && <LanguageTooltip close={setIsComponentVisible} />}
    </div>
  );
};

export default Language;
