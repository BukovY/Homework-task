import React, { FC } from "react";
import play from "../../static/img/play.svg";
import styles from "./FilmCard.module.sass";
import { genresIndexToString, getFilmCover } from "../../utils/functrions";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { useHistory, useLocation } from "react-router-dom";
import { setSearchValue } from "../../redux/actions/appAction";
import { RootState } from "../../redux/store";
import { MovieDetailsInterface } from "../../types/movie";

type MovieDetailsPropsType = {
  el: MovieDetailsInterface;
};

export const FilmCard: FC<MovieDetailsPropsType> = ({ el }) => {
  const dispatch = useDispatch();
  const { genresMap } = useSelector((state: RootState) => state.app);
  const history = useHistory();
  const location = useLocation();
  const openFilm = (id: number) => {
    if (location.pathname.indexOf("search") !== -1) {
      dispatch(setSearchValue(""));
    }
    history.push(`/movie/${id}`);
  };
  const cx = classNames.bind(styles);
  const filmCardClass = cx(
    "rating",
    { rating_up: el.vote_average >= 7 },
    { rating_down: el.vote_average > 1 && el.vote_average < 7 },
    { rating_hide: el.vote_average <= 1 }
  );
  return (
    <div className={styles.card} onClick={() => openFilm(el.id)}>
      <div className={filmCardClass}>
        {el.vote_average && el.vote_average.toFixed(1)}
      </div>
      <div className={styles.film_cover}>
        <img
          src={getFilmCover(el.poster_path)}
          className={styles.film_cover}
          alt={el.title}
          onClick={() => openFilm(el.id)}
        />
        <img src={play} className={styles.block} alt="play" />
      </div>
      {el.title && <div className={styles.title}>{el.title}</div>}
      {el.genre_ids && (
        <div className={styles.genres}>
          {genresMap && genresIndexToString(el.genre_ids, genresMap).join(" ")}
        </div>
      )}
    </div>
  );
};
