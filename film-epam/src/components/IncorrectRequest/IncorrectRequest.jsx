import styles from "./IncorrectRequest.module.sass";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIndexLanguage } from "../../utils/functrions";
import { incorrectRequestTranslation } from "../../static/Translation";
import Typography from "@material-ui/core/Typography";

export const IncorrectRequest = ({ path }) => {
  const { languageSelected } = useSelector((state) => state.app);
  const indLang = getIndexLanguage(languageSelected);
  return (
    <div className={styles.center}>
      <Typography variant="h1">
        {incorrectRequestTranslation.title[indLang]}
      </Typography>
      <Typography variant="body1">
        {incorrectRequestTranslation.headline[indLang]}
      </Typography>
      <Typography variant="body1">
        {incorrectRequestTranslation.spanPrefix[indLang]} <span>{path}</span>{" "}
        {incorrectRequestTranslation.spanPostfix[indLang]}
      </Typography>
      <Typography variant="body1">
        {incorrectRequestTranslation.navDescriptor[indLang]}
      </Typography>
      <Link to={"/"}>
        {incorrectRequestTranslation.homepageButton[indLang]}
      </Link>
    </div>
  );
};
