import React, { FC } from "react";
import { getPeopleCard } from "../../utils/functrions";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

type PeopleProps = {
  el: {
    id: number;
    profile_path: string;
    original_name: string;
    known_for_department: string;
  };
};

const useStyles = makeStyles(() => ({
  peopleCover: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
    borderRadius: "5px",
    aspectRatio: "0.68",
  },
  peopleImg: {
    width: "153px",
    height: "250px",
    display: "flex",
    "@media screen and (max-width: 1300px)": {
      width: "100%",
      height: "auto",
    },
  },
}));

export const People: FC<PeopleProps> = ({ el }) => {
  const classes = useStyles();
  const history = useHistory();
  const selectActor = () => {
    history.push(`/actor/${el.id}`);
  };
  return (
    <Box onClick={selectActor}>
      <Box className={classes.peopleImg}>
        <img
          src={getPeopleCard(el.profile_path)}
          className={classes.peopleCover}
          alt={el.original_name}
        />
      </Box>
      <Typography variant="h5">{el.original_name}</Typography>
      <Typography variant="body2">{el.known_for_department}</Typography>
    </Box>
  );
};
