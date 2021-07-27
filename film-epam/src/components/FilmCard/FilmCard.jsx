import React from "react";
import play from "../../static/img/play.svg";
import styles from "./FilmCard.module.sass";
import { getFilmCover } from "../../utils/functrions";

const FilmCard = ({ img, rating, title, genres, id }) => {
  const openFilm = (id) => {};
  return (
    <div className={styles.card}>
      <div
        className={
          rating >= 7 ? styles.rating_up : rating > 1 ? styles.rating_down : styles.rating_hide
        }
      >
        {rating}
      </div>
      <div className={styles.film_cover}>
        <img
          src={getFilmCover(img)}
          className={styles.film_cover}
          alt={title}
          onClick={() => openFilm(id)}
        />
        <img src={play} className={styles.play_film} alt="play" />
      </div>
      {title && <div className={styles.title}>{title}</div>}
      {genres && <div className={styles.genres}>{genres.join(" ")}</div>}
    </div>
  );
};

export default FilmCard;
