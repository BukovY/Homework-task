import React from "react";
import styles from "./Header.module.css.sass";
import { Language } from "../Language";
import { Search } from "../Search";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/actions/appAction";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    cursor: "pointer",
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
}));

export const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const goHomepage = () => {
    dispatch(resetFilters());
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.flex}>
        <Typography className={classes.title}>
          <Link to={"/"} onClick={goHomepage}>
            Film App
          </Link>
        </Typography>
        <Search />
        <Language />
      </AppBar>
    </div>
  );
};
