import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
    cursor: "pointer",
  },
}));

export const PaginationList = ({ selected, max, handler }) => {
  const classes = useStyles();
  return (
    <Pagination
      className={classes.root}
      variant="outlined"
      boundaryCount={max}
      count={max}
      defaultPage={selected}
      onChange={(e, value) => {
        handler(value);
      }}
    />
  );
};
