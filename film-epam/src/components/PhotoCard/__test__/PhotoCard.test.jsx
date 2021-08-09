import React from "react";
import rerender from "react-test-renderer";
import { PhotoCard } from "../PhotoCard";
import { wrapperProvider } from "../../../utils/functrions";

describe("Testing <People/> Component", () => {
  it("renders correctly", () => {
    const tree = rerender
      .create(wrapperProvider(<PhotoCard path={null} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
