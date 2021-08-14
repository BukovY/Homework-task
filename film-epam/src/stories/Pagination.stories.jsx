import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { Pagination } from "../components/PaginationList/PaginationList";

export default {
  title: "FilmApp/Pagination",
  component: Pagination,
};

export const Default = (args) => wrapperProvider(<Pagination {...args} />);
Default.args = {
  selected: 1,
  max: 5,
};
export const NoActive = (args) => wrapperProvider(<Pagination {...args} />);
NoActive.args = {
  max: 5,
};
export const Active3 = (args) => wrapperProvider(<Pagination {...args} />);
Active3.args = {
  selected: 3,
  max: 5,
};
