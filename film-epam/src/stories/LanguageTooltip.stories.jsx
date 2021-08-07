import React from "react";
import { wrapper } from "../utils/functrions";

import Language from "../components/Language/Language";

export default {
  title: "FilmApp/Language",
  component: Language,
};

const Primary = () => wrapper(<Language />);

export const LanguageTooltipDefault = Primary;
