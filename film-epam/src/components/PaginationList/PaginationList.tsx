import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
    cursor: "pointer",
    "& button": {
      color: "white",
    },
    "& .Mui-selected": {
      backgroundColor: "rgb(251 251 251 / 22%)",
    },
  },
}));

export const PaginationList = (props: {
  selected: number;
  max: number;
  handler: any;
}) => {
  const classes = useStyles();
  return (
    <Pagination
      className={classes.root}
      variant="outlined"
      boundaryCount={props.max}
      count={props.max}
      defaultPage={props.selected}
      onChange={(e, value) => {
        props.handler(value);
      }}
    />
  );
};
