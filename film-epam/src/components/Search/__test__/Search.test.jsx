import React from "react";
import rerender from "react-test-renderer";
import { Search } from "../Search";
import { wrapperProvider } from "../../../utils/functrions";

describe("Testing <Search/> Component", () => {
  it("renders correctly", () => {
    const tree = rerender.create(wrapperProvider(<Search />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
