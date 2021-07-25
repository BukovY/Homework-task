import React from "react";
import s from "./People.module.sass";
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
      <div className={s.people_img}>
        <img
          src={getPeopleCard(img)}
          className={s.people_cover}
          alt={title}
          onClick={() => goToActorPage()}
        />
      </div>
      <p className={s.people_title}>{title}</p>
      <p>{department}</p>
    </div>
  );
};
export default People;
