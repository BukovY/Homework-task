import React from "react";
import rerender from "react-test-renderer";
import { IncorrectRequest } from "../IncorrectRequest";
import { render, screen } from "@testing-library/react";
import { wrapperProvider } from "../../../utils/functrions";

describe("Testing <IncorrectRequest/> Component", () => {
  it("IncorrectRequest view correct", () => {
    const tree = rerender
      .create(wrapperProvider(<IncorrectRequest path={"path"} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renedering of custom path", () => {
    render(wrapperProvider(<IncorrectRequest path={"urlSpan"} />));
    expect(screen.getByText(/urlSpan/i)).toBeInTheDocument();
  });
});
