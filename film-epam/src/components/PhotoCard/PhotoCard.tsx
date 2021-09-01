import React, { FC } from "react";
import { getPhotoCard } from "../../utils/functrions";
import { makeStyles } from "@material-ui/core/styles";
type PhotoCardProps = {
  path: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
}));

export const PhotoCard: FC<PhotoCardProps> = ({ path }) => {
  const classes = useStyles();
  return (
    <img
      src={getPhotoCard(path)}
      className={classes.root}
      alt="PhotoCard"
    />
  );
};
