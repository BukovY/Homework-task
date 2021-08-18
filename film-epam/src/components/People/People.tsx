import React from "react";
import styles from "./People.module.sass";
import { getPeopleCard } from "../../utils/functrions";
import { useHistory } from "react-router-dom";
import { movieDetails } from "../../types/movie";

export const People = (props: {
  el: {
    id: number;
    profile_path: string;
    original_name: string;
    known_for_department: string;
  };
}) => {
  const history = useHistory();
  const selectActor = () => {
    history.push(`/actor/${props.el.id}`);
  };
  return (
    <div onClick={selectActor}>
      <div className={styles.people_img}>
        <img
          src={getPeopleCard(props.el.profile_path)}
          className={styles.people_cover}
          alt={props.el.original_name}
        />
      </div>
      <p className={styles.people_title}>{props.el.original_name}</p>
      <p>{props.el.known_for_department}</p>
    </div>
  );
};
