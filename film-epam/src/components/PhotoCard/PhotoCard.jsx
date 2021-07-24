import React from "react";
import s from "./PhotoCard.module.sass";

const PhotoCard = ({ path }) => {
  const imgPath =
    path === null
      ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
      : `https://image.tmdb.org/t/p/w1280/${path}`;
  return <img src={imgPath} className={s.photo_card} alt="PhotoCard" />;
};
export default PhotoCard;
