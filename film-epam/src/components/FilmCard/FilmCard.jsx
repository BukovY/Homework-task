import React from "react";
import play from "../../static/img/play.svg";
import styles from "./FilmCard.module.sass";
import { getFilmCover } from "../../utils/functrions";
import { useDispatch, useSelector } from "react-redux";
import { getFilm } from "../../redux/reducers/movieReducers";
import { setPage } from "../../redux/actions/appAction";
import classNames from "classnames/bind";

const FilmCard = ({ img, rating, title, genres, id }) => {
  const dispatch = useDispatch();
  const { languageSelected } = useSelector((state) => state.app);
  const openFilm = (id) => {
    const input = {
      selectedMovie: id,
      languageSelected: languageSelected,
    };
    dispatch(getFilm(input));
    dispatch(setPage("movie"));
  };
  const ratingToRender = rating;
  const cx = classNames.bind(styles);
  const filmCardClass = cx(
    "rating",
    { rating_up: rating >= 7 },
    { rating_down: rating > 1 && rating < 7 },
    { rating_hide: rating <= 1 }
  );
  return (
    <div className={styles.card} onClick={() => openFilm(id)}>
      <div className={filmCardClass}>
        {ratingToRender && ratingToRender.toFixed(1)}
      </div>
      <div className={styles.film_cover}>
        <img
          src={getFilmCover(img)}
          className={styles.film_cover}
          alt={title}
          onClick={() => openFilm(id)}
        />
        <img src={play} className={styles.block} alt="play" />
      </div>
      {title && <div className={styles.title}>{title}</div>}
      {genres && <div className={styles.genres}>{genres.join(" ")}</div>}
    </div>
  );
};

export default FilmCard;
