import React from "react";
import { useDispatch} from "react-redux";
import play from "../../static/img/play.svg";
import styles from "./FilmCard.module.sass";
import { getFilmCover } from "../../utils/functrions";
import {setSelectedMovie} from "../../redux/actions/movieAction";

const FilmCard = ({ img, rating, title, genres, id }) => {
    const dispatch = useDispatch()
  const openFilm = (id) => {
        dispatch(setSelectedMovie(id))
  };
  return (
    <div className={styles.card} onClick={() => openFilm(id)}>
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
