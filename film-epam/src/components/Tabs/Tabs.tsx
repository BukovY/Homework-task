import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabTranslation } from "../../static/Translation";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { getIndexLanguage } from "../../utils/functrions";
import { setFilter } from "../../redux/actions/appAction";
import { RootState } from "../../redux/store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: "10px",
    "& > *": {
      margin: theme.spacing(1),
    },
    "@media screen and (max-width: 680px)": {
      alignItems: "center",
    },
  },
}));
export const Tabs: FC = () => {
  const classes = useStyles();
  const { languageSelected, activeFilter } = useSelector(
    (state: RootState) => state.app
  );
  const indLang = getIndexLanguage(languageSelected);
  const dispatch = useDispatch();

  const changeTab = (label: string) => {
    dispatch(setFilter(label));
  };
  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained">
        <Button
          color={activeFilter === "Popular" ? "primary" : undefined}
          onClick={() => changeTab("Popular")}
        >
          {tabTranslation[0][indLang]}
        </Button>
        <Button
          color={activeFilter === "Top rated" ? "primary" : undefined}
          onClick={() => changeTab("Top rated")}
        >
          {tabTranslation[1][indLang]}
        </Button>
        <Button
          color={activeFilter === "Upcoming" ? "primary" : undefined}
          onClick={() => changeTab("Upcoming")}
        >
          {tabTranslation[2][indLang]}
        </Button>
      </ButtonGroup>
    </div>
  );
};
