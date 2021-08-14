import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIndexLanguage } from "../../utils/functrions";
import { incorrectRequestTranslation } from "../../static/Translation";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const IncorrectRequest = ({ path }) => {
  const { languageSelected } = useSelector((state) => state.app);
  const indLang = getIndexLanguage(languageSelected);
  const texts = {
    title: incorrectRequestTranslation.title[indLang],
    headline: incorrectRequestTranslation.headline[indLang],
    spanPrefix: incorrectRequestTranslation.spanPrefix[indLang],
    spanPostfix: incorrectRequestTranslation.spanPostfix[indLang],
    navDescriptor: incorrectRequestTranslation.navDescriptor[indLang],
    homepageButton: incorrectRequestTranslation.homepageButton[indLang],
  };
  const history = useHistory();
  const goHomepage = () => {
    history.push("/");
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">{texts.title}</Typography>
      <Typography variant="body1">{texts.headline}</Typography>
      <Typography variant="body1">
        {texts.spanPrefix} <span style={{ color: "red" }}>{path}</span>{" "}
        {texts.spanPostfix}
      </Typography>
      <Typography variant="body1">{texts.navDescriptor}</Typography>
      <Button variant="contained" onClick={goHomepage}>
        {texts.homepageButton}
      </Button>
    </div>
  );
};
