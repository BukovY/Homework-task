import React from "react";
import { wrapper } from "../utils/functrions";

import Header from "../components/Header/Header";

export default {
  title: "FilmApp/Header",
  component: Header,
};

const Primary = () => wrapper(<Header />);

export const HeaderDefault = Primary;
