import React from "react";
import styles from "./PhotoCard.module.sass";
import { getPhotoCard } from "../../utils/functrions";

export const PhotoCard = ({ path }) => (
  <img src={getPhotoCard(path)} className={styles.photo_card} alt="PhotoCard" />
);
