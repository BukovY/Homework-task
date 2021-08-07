import React from "react";
import { wrapper } from "../utils/functrions";

import LoaderPlaceholder from "../components/LoarerPlaceholder/LoaderPlaceholder";

export default {
  title: "FilmApp/LoaderPlaceholder",
  component: LoaderPlaceholder,
};

const Primary = () => wrapper(<LoaderPlaceholder />);

export const LoaderPlaceholderDefault = Primary;
