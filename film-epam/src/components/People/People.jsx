import React from "react";
import s from "./People.module.sass";
import {store} from "../../redux/store";
import {rerender} from "../../index";

const People = ({ img, title, department }) => {
    const goToActorPage = ()=> {
        store.selectPage = 'actor'
        rerender()
    }
  const imgPath =
    img === null
      ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
      : `https://image.tmdb.org/t/p/w500/${img}`;
  return (
    <div>
        <div className={s.people_img}>
      <img src={imgPath} className={s.people_cover} alt={title} onClick={()=> goToActorPage()}/>
        </div>
      <p className={s.people_title}>{title}</p>
      <p>{department}</p>
    </div>
  );
};
export default People
