import React from "react";
import styles from "./FilmCover.module.sass";
import { getFilmCover } from "../../utils/functrions";

const FilmCover = ({ img, rating }) => {
  const ratingToRender = rating;
  return (
    <div className={styles.card}>
      <div
        className={
          rating >= 7
            ? styles.rating_up
            : rating > 1
            ? styles.rating_down
            : styles.rating_hide
        }
      >
        {ratingToRender && ratingToRender.toFixed(1)}
      </div>
      <div className={styles.film_cover}>
        <img
          src={getFilmCover(img)}
          className={styles.film_cover}
          alt="cover"
        />
      </div>
    </div>
  );
};

export default FilmCover;
