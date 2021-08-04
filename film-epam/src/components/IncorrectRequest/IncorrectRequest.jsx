import styles from "./IncorrectRequest.module.sass";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIndexLanguage } from "../../utils/functrions";
import { incorrectRequestTranslation } from "../../static/Translation";

const IncorrectRequest = ({ path }) => {
  const { languageSelected } = useSelector((state) => state.app);
  const indLang = getIndexLanguage(languageSelected);
  return (
    <div className={styles.center}>
      <h1>{incorrectRequestTranslation.title[indLang]}</h1>
      <p>{incorrectRequestTranslation.headline[indLang]}</p>
      <p>
        {incorrectRequestTranslation.spanPrefix[indLang]} <span>{path}</span>{" "}
        {incorrectRequestTranslation.spanPostfix[indLang]}
      </p>
      <p>{incorrectRequestTranslation.navDescriptor[indLang]}</p>
      <Link to={"/"}>
        {incorrectRequestTranslation.homepageButton[indLang]}
      </Link>
    </div>
  );
};

export default IncorrectRequest;
