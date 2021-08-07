import React from "react";
import { wrapper } from "../utils/functrions";

import FilmCard from "../components/FilmCard/FilmCard";

export default {
  title: "FilmApp/FilmCard",
  component: FilmCard,
};

export const GreenRating = (args) => wrapper(<FilmCard {...args} />);
GreenRating.args = {
  el: {
    title: "Title film",
    vote_average: 7.8,
    genre_ids: [28],
    poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
  },
};

export const NoImage = (args) => wrapper(<FilmCard {...args} />);
NoImage.args = {
  el: {
    title: "Title film",
    vote_average: 7.8,
    genre_ids: [28],
    poster_path: null,
  },
};

export const GrayRating = (args) => wrapper(<FilmCard {...args} />);
GrayRating.args = {
  el: {
    title: "Title film",
    vote_average: 4,
    genre_ids: [28],
    poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
  },
};

export const NoRating = (args) => wrapper(<FilmCard {...args} />);
NoRating.args = {
  el: {
    title: "Title film",
    vote_average: null,
    genre_ids: [28],
    poster_path: "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
  },
};
