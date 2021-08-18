import React from "react";
import play from "../../static/img/play.svg";
import styles from "./FilmCard.module.sass";
import { genresIndexToString, getFilmCover } from "../../utils/functrions";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { useHistory, useLocation } from "react-router-dom";
import { setSearchValue } from "../../redux/actions/appAction";
import { movieDetails } from "../../types/movie";
import { RootState } from "../../redux/store";

export const FilmCard = (props: { el: movieDetails }) => {
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
    { rating_up: props.el.vote_average >= 7 },
    { rating_down: props.el.vote_average > 1 && props.el.vote_average < 7 },
    { rating_hide: props.el.vote_average <= 1 }
  );
  return (
    <div className={styles.card} onClick={() => openFilm(props.el.id)}>
      <div className={filmCardClass}>
        {props.el.vote_average && props.el.vote_average.toFixed(1)}
      </div>
      <div className={styles.film_cover}>
        <img
          src={getFilmCover(props.el.poster_path)}
          className={styles.film_cover}
          alt={props.el.title}
          onClick={() => openFilm(props.el.id)}
        />
        <img src={play} className={styles.block} alt="play" />
      </div>
      {props.el.title && <div className={styles.title}>{props.el.title}</div>}
      {props.el.genre_ids && (
        <div className={styles.genres}>
          {genresMap &&
            genresIndexToString(props.el.genre_ids, genresMap).join(" ")}
        </div>
      )}
    </div>
  );
};
