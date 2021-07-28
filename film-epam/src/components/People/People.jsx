import React from "react";
import styles from "./People.module.sass";
import { getPeopleCard } from "../../utils/functrions";
import { setActor } from "../../redux/actions/actorAction";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/actions/appAction";

const People = ({ img, title, department, id }) => {
  const dispatch = useDispatch();
  const selectActor = (id) => {
    dispatch(setPage("actor"));
    dispatch(setActor(id));
  };
  return (
    <div onClick={() => selectActor(id)}>
      <div className={styles.people_img}>
        <img
          src={getPeopleCard(img)}
          className={styles.people_cover}
          alt={title}
        />
      </div>
      <p className={styles.people_title}>{title}</p>
      <p>{department}</p>
    </div>
  );
};
export default People;
