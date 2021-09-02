import React, { FC, useEffect } from "react";
import { LanguageTooltip } from "./components/LanguageTooltip";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { getGenresMap } from "../../redux/reducers/appReducers";
import { useComponentVisible } from "../../utils/customHoocs";
import { getIndexLanguage } from "../../utils/functrions";
import { langTranslation } from "../../static/Translation";
import { RootState } from "../../redux/store";
import { makeStyles } from "@material-ui/core/styles";
import RootRef from "@material-ui/core/RootRef";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  languageSelect: {
    width: "40px",
    height: "25px",
    backgroundColor: "#202020",
    color: "white",
    fontWeight: 500,
    border: "2px solid white",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "50px",
    paddingBottom: "1px",
    "@media screen and (max-width: 650px)": {
      marginRight: "0px",
    },
  },
  open: {
    backgroundColor: "white",
    color: "#202020",
  },
}));

export const Language: FC = () => {
  const classes = useStyles();
  const { languageSelected } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresMap(languageSelected));
  }, [languageSelected]);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const cx = classNames.bind(classes);
  const langClass = cx("languageSelect", { open: isComponentVisible });
  const langInd = getIndexLanguage(languageSelected);

  return (
    <RootRef rootRef={ref}>
      <Box>
        <Box
          className={langClass}
          onClick={() =>
            isComponentVisible
              ? setIsComponentVisible(false)
              : setIsComponentVisible(true)
          }
        >
          {langTranslation[langInd][langInd]}
        </Box>
        {isComponentVisible && (
          <LanguageTooltip close={setIsComponentVisible} />
        )}
      </Box>
    </RootRef>
  );
};
