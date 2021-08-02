import React from "react";
import styles from "./People.module.sass";
import { useDispatch } from "react-redux";
import { getPeopleCard } from "../../utils/functrions";
import { setActor } from "../../redux/actions/actorAction";
import { setPage } from "../../redux/actions/appAction";

const People = ({ el }) => {
  const dispatch = useDispatch();
  const selectActor = () => {
    dispatch(setPage("actor"));
    dispatch(setActor(el.id));
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
