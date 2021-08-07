import React from "react";
import { wrapper } from "../utils/functrions";

import Paginations from "../components/Pagination/Paginations";

export default {
  title: "FilmApp/Pagination",
  component: Paginations,
};

export const Default = (args) => wrapper(<Paginations {...args} />);
Default.args = {
  selected: 1,
  max: 5,
};
export const NoActive = (args) => wrapper(<Paginations {...args} />);
NoActive.args = {
  max: 5,
};
export const Active3 = (args) => wrapper(<Paginations {...args} />);
Active3.args = {
  selected: 3,
  max: 5,
};
