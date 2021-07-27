import React from "react";
import styles from "./PhotoCard.module.sass";
import { getPhotoCard } from "../../utils/functrions";

const PhotoCard = ({ path }) => {
  return (
    <img src={getPhotoCard(path)} className={styles.photo_card} alt="PhotoCard" />
  );
};
export default PhotoCard;
