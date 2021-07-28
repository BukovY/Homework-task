import React from "react";
import styles from "./People.module.sass";
import { getPeopleCard } from "../../utils/functrions";

const People = ({ img, title, department }) => {
  return (
    <div>
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
