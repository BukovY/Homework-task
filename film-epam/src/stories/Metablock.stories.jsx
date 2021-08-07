import React from "react";
import { wrapper } from "../utils/functrions";

import MetaBlock from "../components/MetaBlock/MetaBlock";

export default {
  title: "FilmApp/Metablock",
  component: MetaBlock,
};

export const Default = (args) => wrapper(<MetaBlock {...args} />);
Default.args = {
  title: "Title",
  meta: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
};
export const PlusFrefix = (args) => wrapper(<MetaBlock {...args} />);
PlusFrefix.args = {
  title: "Cost",
  meta: "434334",
  prefix: "$",
};
