import React from "react";
import rerender from "react-test-renderer";
import { People } from "../People";

const el = { original_name: "Sara Connor", known_for_department: "HR" };
describe("Testing <People/> Component", () => {
  it("renders correctly", () => {
    const tree = rerender.create(<People el={el} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
