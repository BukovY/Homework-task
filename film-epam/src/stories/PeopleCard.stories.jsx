import React from "react";
import { wrapper } from "../utils/functrions";

import People from "../components/People/People";

export default {
  title: "FilmApp/PeopleCard",
  component: People,
};

export const Default = (args) => wrapper(<People {...args} />);
Default.args = {
  el: {
    profile_path: "/votQ3CnE1KXrAQ61VC7KPHQRG6D.jpg",
    original_name: "Tenoch Huerta",
    known_for_department: "Actor",
  },
};
export const DepartmenmtCast = (args) => wrapper(<People {...args} />);
DepartmenmtCast.args = {
  el: {
    profile_path: "/votQ3CnE1KXrAQ61VC7KPHQRG6D.jpg",
    original_name: "Tenoch Huerta",
    known_for_department: "Cast",
  },
};
export const NoPhoto = (args) => wrapper(<People {...args} />);
NoPhoto.args = {
  el: {
    profile_path: null,
    original_name: "Tenoch Huerta",
    known_for_department: "Actor",
  },
};
