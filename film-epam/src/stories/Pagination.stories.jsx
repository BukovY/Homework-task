import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { Paginations } from "../components/Pagination/Paginations";

export default {
  title: "FilmApp/Pagination",
  component: Paginations,
};

export const Default = (args) => wrapperProvider(<Paginations {...args} />);
Default.args = {
  selected: 1,
  max: 5,
};
export const NoActive = (args) => wrapperProvider(<Paginations {...args} />);
NoActive.args = {
  max: 5,
};
export const Active3 = (args) => wrapperProvider(<Paginations {...args} />);
Active3.args = {
  selected: 3,
  max: 5,
};
