import React, { FC } from "react";
import styles from "./PhotoCard.module.sass";
import { getPhotoCard } from "../../utils/functrions";
type PhotoCardProps = {
  path: string;
};
export const PhotoCard: FC<PhotoCardProps> = ({ path }) => (
  <img src={getPhotoCard(path)} className={styles.photo_card} alt="PhotoCard" />
);
