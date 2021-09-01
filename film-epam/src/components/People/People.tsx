import React, { FC } from "react";
import { getPeopleCard } from "../../utils/functrions";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

type PeopleProps = {
  el: {
    id: number;
    profile_path: string;
    original_name: string;
    known_for_department: string;
  };
};

const useStyles = makeStyles(() => ({
  peopleTitle: {
    fontSize: "20px ",
  },
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
    <div onClick={selectActor}>
      <div className={classes.peopleImg}>
        <img
          src={getPeopleCard(el.profile_path)}
          className={classes.peopleCover}
          alt={el.original_name}
        />
      </div>
      <p className={classes.peopleTitle}>{el.original_name}</p>
      <p>{el.known_for_department}</p>
    </div>
  );
};
