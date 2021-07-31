import React from "react";
import play from "../../static/img/play.svg";
import styles from "./FilmCard.module.sass";
import { getFilmCover } from "../../utils/functrions";
import { useDispatch, useSelector } from "react-redux";
import { getFilm } from "../../redux/reducers/movieReducers";
import { setPage } from "../../redux/actions/appAction";

const FilmCard = ({ img, rating, title, genres, id }) => {
  const dispatch = useDispatch();
  const { languageSelected } = useSelector((state) => state.appReducer);
  const openFilm = (id) => {
      const input = {
          selectedMovie: id,
          languageSelected: languageSelected,
      }
    dispatch(getFilm(input));
    dispatch(setPage("movie"));
  };
  const ratingToRender = rating;
  return (
    <div className={styles.card} onClick={() => openFilm(id)}>
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
