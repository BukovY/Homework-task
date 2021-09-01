import React, { FC } from "react";
import play from "../../static/img/play.svg";
import { genresIndexToString, getFilmCover } from "../../utils/functrions";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { useHistory, useLocation } from "react-router-dom";
import { setSearchValue } from "../../redux/actions/appAction";
import { RootState } from "../../redux/store";
import { MovieDetailsInterface } from "../../types/movie";
import { makeStyles } from "@material-ui/core/styles";

type MovieDetailsPropsType = {
  el: MovieDetailsInterface;
};

const useStyles = makeStyles(() => ({
  card: {
    color: "white",
  },
  genres: {
    fontSize: "14px",
  },
  title: {
    fontSize: "18px",
  },
  filmCover: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
    position: "relative",
    aspectRatio: "0.68",
    "img + img": {
      width: "50%",
      borderRadius: "5px",
    },
    "&:hover .block": {
      visibility: "visible",
    },
  },
  block: {
    position: "absolute",
    top: "30%",
    left: '20%',
    right: '20%',
    padding: "5px",
    display: "block",
    visibility: "hidden",
  },
  rating: {
    position: "relative",
    top: "35px",
    left: "-5px",
    width: " 30px",
    textAlign: "center",
    borderRadius: "5px",
    zIndex: 1,
  },
  ratingUp: {
    backgroundColor: "green",
  },
  ratingDown: {
    backgroundColor: "gray",
  },
  ratingHide: {
    color: "#00ff0000",
    backgroundColor: "#00ff0000",
  },
}));

export const FilmCard: FC<MovieDetailsPropsType> = ({ el }) => {
  const classes = useStyles();
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
  const cx = classNames.bind(classes);
  const filmCardClass = cx(
    "rating",
    { ratingUp: el.vote_average >= 7 },
    { ratingDown: el.vote_average > 1 && el.vote_average < 7 },
    { ratingHide: el.vote_average <= 1 }
  );
  return (
    <div className={classes.card} onClick={() => openFilm(el.id)}>
      <div className={filmCardClass}>
        {el.vote_average && el.vote_average.toFixed(1)}
      </div>
      <div className={classes.filmCover}>
        <img
          src={getFilmCover(el.poster_path)}
          className={classes.filmCover}
          alt={el.title}
          onClick={() => openFilm(el.id)}
        />
        <img src={play} className={classes.block} alt="play" />
      </div>
      {el.title && <div className={classes.title}>{el.title}</div>}
      {el.genre_ids && (
        <div className={classes.genres}>
          {genresMap && genresIndexToString(el.genre_ids, genresMap).join(" ")}
        </div>
      )}
    </div>
  );
};
