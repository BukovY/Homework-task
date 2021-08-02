import React from "react";
import styles from "./People.module.sass";
import { useDispatch } from "react-redux";
import { getPeopleCard } from "../../utils/functrions";
import { isActorNeedUpdate, setActor } from "../../redux/actions/actorAction";
import { setPage } from "../../redux/actions/appAction";

const People = ({ img, title, department, id }) => {
  const dispatch = useDispatch();
  const selectActor = (id) => {
    dispatch(setPage("actor"));
    dispatch(setActor(id));
    dispatch(isActorNeedUpdate(true));
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
