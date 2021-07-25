import React from "react";
import s from "./PhotoCard.module.sass";
import { getPhotoCard } from "../../utils/functrions";

const PhotoCard = ({ path }) => {
  return (
    <img src={getPhotoCard(path)} className={s.photo_card} alt="PhotoCard" />
  );
};
export default PhotoCard;
