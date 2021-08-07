import React from "react";
import { wrapper } from "../utils/functrions";

import Tabs from "../components/Tabs/Tabs";

export default {
  title: "FilmApp/Tabs",
  component: Tabs,
};

export const TabsDefault = () => wrapper(<Tabs />);
