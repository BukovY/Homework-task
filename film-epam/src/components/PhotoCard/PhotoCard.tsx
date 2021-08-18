import React from "react";
import styles from "./PhotoCard.module.sass";
import { getPhotoCard } from "../../utils/functrions";

export const PhotoCard = (props: { path:string }) => (
  <img src={getPhotoCard(props.path)} className={styles.photo_card} alt="PhotoCard" />
);
