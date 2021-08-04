import React from "react";
import styles from "./People.module.sass";
import { getPeopleCard } from "../../utils/functrions";
import { useHistory } from "react-router-dom";

const People = ({ el }) => {
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
export default People;
