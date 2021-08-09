import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { LoaderPlaceholder } from "../components/LoaderPlaceholder";

export default {
  title: "FilmApp/LoaderPlaceholder",
  component: LoaderPlaceholder,
};

export const LoaderPlaceholderDefault = () =>
  wrapperProvider(<LoaderPlaceholder />);
