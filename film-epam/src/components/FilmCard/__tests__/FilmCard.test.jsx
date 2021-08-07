import React from "react";
import { FilmCard } from "../FilmCard";
import { wrapperProvider } from "../../../utils/functrions";
import rerender from "react-test-renderer";

const el = {
  title: "Title film",
  vote_average: 7.8,
};
describe("Testing <FilmCard/> Component", () => {
  it("renders correctly", () => {
    const tree = rerender
      .create(wrapperProvider(<FilmCard el={el} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
