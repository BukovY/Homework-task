import React from "react";
import { Language } from "../Language";
import { Search } from "../Search";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/actions/appAction";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#202020",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 10px",
    "& form": {
      padding: "5px 0",
      paddingLeft: "58px",
    },
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
    <AppBar position="static" className={classes.bg}>
      <Container className={classes.flex}>
        <Typography className={classes.title}>
          <Link to={"/"} onClick={goHomepage}>
            Film App
          </Link>
        </Typography>
        <Search />
        <Language />
      </Container>
    </AppBar>
  );
};
