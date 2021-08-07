import React from "react";
import rerender from "react-test-renderer";
import { MetaBlock } from "../MetaBlock";

describe("Testing <MetaBlock/> Component", () => {
  it("Metcblock view correct", () => {
    const tree = rerender
      .create(
        <MetaBlock meta={"meta text"} prefix={"prefix"} title={"title"} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
