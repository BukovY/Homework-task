import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { Language } from "../components/Language";

export default {
  title: "FilmApp/Language",
  component: Language,
};

export const LanguageTooltipDefault = () => wrapperProvider(<Language />);
