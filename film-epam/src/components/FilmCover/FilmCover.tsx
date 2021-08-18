import React, { FC } from "react";
import styles from "./FilmCover.module.sass";
import { getFilmCover } from "../../utils/functrions";
import classNames from "classnames/bind";
import { MovieDetailsInterface } from "../../types/movie";

type MovieDetailsPropsType = {
  el: MovieDetailsInterface;
};

export const FilmCover: FC<MovieDetailsPropsType> = ({ el }) => {
  const ratingToRender = el.vote_average;
  const cx = classNames.bind(styles);
  const filmCardClass = cx(
    "rating",
    { rating_up: el.vote_average >= 7 },
    { rating_down: el.vote_average > 1 && el.vote_average < 7 },
    { rating_hide: el.vote_average <= 1 }
  );
  return (
    <div>
      <div className={filmCardClass}>
        {ratingToRender && ratingToRender.toFixed(1)}
      </div>
      <div className={styles.film_cover}>
        <img
          src={getFilmCover(el.poster_path)}
          className={styles.film_cover}
          alt="cover"
        />
      </div>
    </div>
  );
};
