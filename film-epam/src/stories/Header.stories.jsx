import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { Header } from "../components/Header";

export default {
  title: "FilmApp/Header",
  component: Header,
};

export const HeaderDefault = () => wrapperProvider(<Header />);
