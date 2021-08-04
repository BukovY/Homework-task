import React from "react";
import play from "../../static/img/play.svg";
import styles from "./FilmCard.module.sass";
import { genresIndexToString, getFilmCover } from "../../utils/functrions";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { setMovie } from "../../redux/actions/movieAction";
import { useHistory } from "react-router-dom";
import { setSearchValue } from "../../redux/actions/appAction";

const FilmCard = ({ el }) => {
  const dispatch = useDispatch();
  const { genresMap } = useSelector((state) => state.app);
  const history = useHistory();
  const openFilm = (id) => {
    dispatch(setMovie(id));
    dispatch(setSearchValue(""));
    history.push(`/movie/${el.id}`);
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
          {genresIndexToString(el.genre_ids, genresMap).join(" ")}
        </div>
      )}
    </div>
  );
};

export default FilmCard;
