import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../../redux/actions/appAction";
import classNames from "classnames/bind";
import { RootState } from "../../../../redux/store";
import { makeStyles } from "@material-ui/core/styles";

type LanguageSelectProps = {
  language: string;
  display: string;
};

const useStyles = makeStyles(() => ({
  tooltip: {
    textAlign: "center",
    "&:hover": {
      color: "white",
      backgroundColor: "#282c34",
      cursor: "pointer",
    },
  },
  select: {
    fontWeight: 700,
    textDecoration: "underline",
  },
}));

export const LanguageSelect: FC<LanguageSelectProps> = ({
  language,
  display,
}) => {
  const classes = useStyles();
  const { languageSelected } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const selectLanguage = (language: string) => {
    dispatch(setLanguage(language));
  };
  const cx = classNames.bind(classes);
  const languageClass = cx("tooltip", {
    select: languageSelected === language,
  });
  return (
    <div className={languageClass} onClick={() => selectLanguage(language)}>
      {display}
    </div>
  );
};
