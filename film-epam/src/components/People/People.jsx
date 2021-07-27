import React from "react";
import styles from "./People.module.sass";
import { store } from "../../redux/store";
import { rerender } from "../../index";
import { getPeopleCard } from "../../utils/functrions";

const People = ({ img, title, department }) => {
  const goToActorPage = () => {
    store.selectPage = "actor";
    rerender();
  };
  return (
    <div>
      <div className={styles.people_img}>
        <img
          src={getPeopleCard(img)}
          className={styles.people_cover}
          alt={title}
          onClick={goToActorPage}
        />
      </div>
      <p className={styles.people_title}>{title}</p>
      <p>{department}</p>
    </div>
  );
};
export default People;
