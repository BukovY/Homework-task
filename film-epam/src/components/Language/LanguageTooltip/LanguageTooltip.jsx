import React, { useRef, useEffect } from "react";
import styles from "./LanguageTooltip.module.sass";
import LanguageSelect from "./LanguageSelect/LanguageSelect";
import { useDispatch, useSelector } from "react-redux";
import { setTooltipOpenStatus } from "../../../redux/actions/appAction";

const LanguageTooltip = () => {
  const { languages } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const rootEl = useRef();
  useEffect(() => {
    const onClick = (e) => null || dispatch(setTooltipOpenStatus(false));
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div className={styles.tooltip} ref={rootEl}>
      <div className={styles.tooltip_box}>
        {languages.map((el) => (
          <LanguageSelect key={el} language={el} />
        ))}
      </div>
    </div>
  );
};
export default LanguageTooltip;
