import React, { FC } from "react";
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

type PaginationListProps = {
  selected: number;
  max: number;
  handler: (value:number) => void;
};
export const PaginationList: FC<PaginationListProps> = ({
  selected,
  max,
  handler,
}) => {
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
