import React, { FC } from "react";
import styles from "./People.module.sass";
import { getPeopleCard } from "../../utils/functrions";
import { useHistory } from "react-router-dom";
import { MovieDetailsInterface } from "../../types/movie";
type PeopleProps = {
  el: {
    id: number;
    profile_path: string;
    original_name: string;
    known_for_department: string;
  };
};
export const People: FC<PeopleProps> = ({ el }) => {
  const history = useHistory();
  const selectActor = () => {
    history.push(`/actor/${el.id}`);
  };
  return (
    <div onClick={selectActor}>
      <div className={styles.people_img}>
        <img
          src={getPeopleCard(el.profile_path)}
          className={styles.people_cover}
          alt={el.original_name}
        />
      </div>
      <p className={styles.people_title}>{el.original_name}</p>
      <p>{el.known_for_department}</p>
    </div>
  );
};
