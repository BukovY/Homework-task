import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { MetaBlock } from "../components/MetaBlock";

export default {
  title: "FilmApp/Metablock",
  component: MetaBlock,
};

export const Default = (args) => wrapperProvider(<MetaBlock {...args} />);
Default.args = {
  title: "Title",
  meta: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
};
export const PlusFrefix = (args) => wrapperProvider(<MetaBlock {...args} />);
PlusFrefix.args = {
  title: "Cost",
  meta: "434334",
  prefix: "$",
};
