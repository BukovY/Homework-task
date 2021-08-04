import React from "react";
import styles from "./People.module.sass";
import { useDispatch } from "react-redux";
import { getPeopleCard } from "../../utils/functrions";
import { setActor } from "../../redux/actions/actorAction";
import { Link } from "react-router-dom";

const People = ({ el }) => {
  const dispatch = useDispatch();
  const selectActor = () => {
    dispatch(setActor(el.id));
  };
  return (
    <Link to={`/actor/${el.id}`}>
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
    </Link>
  );
};
export default People;
