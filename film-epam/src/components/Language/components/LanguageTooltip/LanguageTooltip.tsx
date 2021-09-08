import React, { FC } from "react";
import { LanguageSelect } from "../LanguageSelect";
import { useSelector } from "react-redux";
import { langTranslation } from "../../../../static/Translation";
import { getIndexLanguage } from "../../../../utils/functrions";
import { RootState } from "../../../../redux/store";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

type LanguageTooltipProps = {
  close: (value: boolean) => void;
};

const useStyles = makeStyles(() => ({
  tooltip: {
    position: "absolute",
    display: "inline-block",
    borderBottom: "1px dotted black",
    width: "1px",
    height: "1px",
  },
  tooltipBox: {
    visibility: "visible",
    width: "100px",
    height: "63px",
    backgroundColor: "white",
    color: "black",
    alignItems: "center",
    padding: "5px 0",
    borderRadius: "5px",
    position: "relative",
    bottom: "-17px",
    left: "-26px",
    zIndex: 5,
    boxShadow: "0px 0px 13px 0px rgba(0, 0, 0, 0.2)",
    "&:before": {
      boxShadow: "0px -10px 10px -3px rgba(0, 0, 0, 0.2)",
      content: "",
      border: "solid transparent",
      position: "absolute",
      bottom: "100%",
      left: "50%",
      borderBottomColor: "white",
      marginLeft: "-9px",
      borderWidth: " 9px",
    },
  },
}));

export const LanguageTooltip: FC<LanguageTooltipProps> = ({ close }) => {
  const classes = useStyles();
  const { languages, languageSelected } = useSelector(
    (state: RootState) => state.app
  );
  const langInd = getIndexLanguage(languageSelected);

  return (
    <Box className={classes.tooltip} onClick={() => close(false)}>
      <Box className={classes.tooltipBox}>
        {languages.map((el, ind) => (
          <LanguageSelect
            key={el}
            language={el}
            display={langTranslation[ind][langInd]}
          />
        ))}
      </Box>
    </Box>
  );
};
