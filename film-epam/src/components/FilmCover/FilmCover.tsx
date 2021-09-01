import React, { FC } from "react";
import { getFilmCover } from "../../utils/functrions";
import classNames from "classnames/bind";
import { MovieDetailsInterface } from "../../types/movie";
import { makeStyles } from "@material-ui/core/styles";

type MovieDetailsPropsType = {
  el: MovieDetailsInterface;
};

const useStyles = makeStyles(() => ({
  filmCover: {
    width: "100%",
    height: "auto",
    img: {
      width: "100%",
      borderRadius: "5px",
    },
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

export const FilmCover: FC<MovieDetailsPropsType> = ({ el }) => {
  const classes = useStyles();
  const ratingToRender = el.vote_average;
  const cx = classNames.bind(classes);
  const filmCardClass = cx(
    "rating",
    { ratingUp: el.vote_average >= 7 },
    { ratingDown: el.vote_average > 1 && el.vote_average < 7 },
    { ratingHide: el.vote_average <= 1 }
  );
  return (
    <div>
      <div className={filmCardClass}>
        {ratingToRender && ratingToRender.toFixed(1)}
      </div>
      <div className={classes.filmCover}>
        <img
          src={getFilmCover(el.poster_path)}
          className={classes.filmCover}
          alt="cover"
        />
      </div>
    </div>
  );
};
