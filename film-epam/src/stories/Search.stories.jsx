import React from "react";
import { wrapper } from "../utils/functrions";

import Search from "../components/Search/Search";

export default {
  title: "FilmApp/Search",
  component: Search,
};

const Primary = () => wrapper(<Search />);

export const SearchInput = Primary;
