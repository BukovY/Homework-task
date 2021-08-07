import React from "react";
import { wrapperProvider } from "../utils/functrions";

import { People } from "../components/People";

export default {
  title: "FilmApp/PeopleCard",
  component: People,
};

export const Default = (args) => wrapperProvider(<People {...args} />);
Default.args = {
  el: {
    profile_path: "/votQ3CnE1KXrAQ61VC7KPHQRG6D.jpg",
    original_name: "Tenoch Huerta",
    known_for_department: "Actor",
  },
};
export const DepartmenmtCast = (args) => wrapperProvider(<People {...args} />);
DepartmenmtCast.args = {
  el: {
    profile_path: "/votQ3CnE1KXrAQ61VC7KPHQRG6D.jpg",
    original_name: "Tenoch Huerta",
    known_for_department: "Cast",
  },
};
export const NoPhoto = (args) => wrapperProvider(<People {...args} />);
NoPhoto.args = {
  el: {
    profile_path: null,
    original_name: "Tenoch Huerta",
    known_for_department: "Actor",
  },
};
