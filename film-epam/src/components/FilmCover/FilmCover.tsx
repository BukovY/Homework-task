import React from "react";
import styles from "./FilmCover.module.sass";
import { getFilmCover } from "../../utils/functrions";
import classNames from "classnames/bind";
import { movieDetails } from "../../types/movie";

export const FilmCover = (props: { el: movieDetails }) => {
  const ratingToRender = props.el.vote_average;
  const cx = classNames.bind(styles);
  const filmCardClass = cx(
    "rating",
    { rating_up: props.el.vote_average >= 7 },
    { rating_down: props.el.vote_average > 1 && props.el.vote_average < 7 },
    { rating_hide: props.el.vote_average <= 1 }
  );
  return (
    <div>
      <div className={filmCardClass}>
        {ratingToRender && ratingToRender.toFixed(1)}
      </div>
      <div className={styles.film_cover}>
        <img
          src={getFilmCover(props.el.poster_path)}
          className={styles.film_cover}
          alt="cover"
        />
      </div>
    </div>
  );
};
