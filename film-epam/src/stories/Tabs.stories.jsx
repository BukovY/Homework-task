import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { Tabs } from "../components/Tabs";

export default {
  title: "FilmApp/Tabs",
  component: Tabs,
};

export const TabsDefault = () => wrapperProvider(<Tabs />);
