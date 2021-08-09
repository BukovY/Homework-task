import React from "react";
import rerender from "react-test-renderer";
import { FilmCover } from "../FilmCover";

const el = {
  title: "Title film",
  vote_average: 7.8,
};
describe("Testing <FilmCover/> Component", () => {
  it("renders correctly", () => {
    const tree = rerender.create(<FilmCover el={el} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
