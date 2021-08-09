import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { Search } from "../components/Search";

export default {
  title: "FilmApp/Search",
  component: Search,
};

export const SearchInput = () => wrapperProvider(<Search />);
