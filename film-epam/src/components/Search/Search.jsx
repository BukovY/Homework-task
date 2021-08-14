import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/actions/appAction";
import { setSearchPage } from "../../redux/actions/searchAction";
import { headerTranslation } from "../../static/Translation";
import { getSearchData } from "../../redux/reducers/searchReducers";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "300px",
      "@media screen and (max-width: 670px)": {
        width: "200px",
      },
    },
  },
}));

export const Search = () => {
  const classes = useStyles();
  const { search, languageSelected } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const history = useHistory();

  const goToSearch = (e) => {
    e.preventDefault();
    if (search.length !== 0) {
      dispatch(setSearchPage(1));
      const input = {
        search,
        searchPage: 1,
        languageSelected,
      };
      dispatch(getSearchData(input));
      history.push(`/search/${search.split(" ").join("%20")}`);
    } else {
      alert("Введите поисковой элемент");
    }
  };

  return (
    <form>
      <Box className={classes.search}>
        <Box className={classes.searchIcon}>
          <SearchIcon />
        </Box>
        <InputBase
          onChange={(el) => dispatch(setSearchValue(el.target.value))}
          value={search}
          placeholder={headerTranslation.search[languageSelected]}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
      <button
        onClick={(e) => goToSearch(e)}
        style={{ display: "none" }}
      ></button>
    </form>
  );
};
