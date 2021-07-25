import React from "react";
import play from "../../static/img/play.svg";
import { store } from "../../redux/store";
import { rerender } from "../../index";
import s from "./FilmCard.module.sass";
import { getFilmCover } from "../../utils/functrions";

const FilmCard = ({ img, rating, title, genres, id }) => {
  const openFilm = (id) => {
    store.selectedFilm = id;
    store.isTooltipLanguageOpen = false;
    store.selectPage = "movie";
    rerender();
  };

  return (
    <div className={s.card}>
      <div
        className={
          rating < 7
            ? `${s.rating} ${s.rating_down}`
            : `${s.rating} ${s.rating_up}`
        }
      >
        {rating}
      </div>
      <div className={s.film_cover}>
        <img
          src={getFilmCover(img)}
          className={s.film_cover}
          alt={title}
          onClick={() => openFilm(id)}
        />
        <img src={play} className={s.play_film} alt="play" />
      </div>
      {title && <div className={s.title}>{title}</div>}
      {genres && <div className={s.genres}>{genres.join(" ")}</div>}
    </div>
  );
};

export default FilmCard;
