import React from "react";
import rerender from "react-test-renderer";
import { PaginationList } from "../PaginationList";
import { fireEvent, render, screen } from "@testing-library/react";
import { wrapperProvider } from "../../../utils/functrions";

describe("Testing <Pagination/> Component", () => {
  it("Pagination view correct", () => {
    const tree = rerender
      .create(
        wrapperProvider(
          <PaginationList
            handler={() => {
              return null;
            }}
            max={5}
          />
        )
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Event testing Pagination", () => {
  it("Change pagination", () => {
    const handleClick = jest.fn();
    render(wrapperProvider(<PaginationList handler={handleClick} max={5} />));
    fireEvent.click(screen.getByText(/1/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("Change pagination 2 level in", () => {
    const handleClick = jest.fn();
    render(wrapperProvider(<PaginationList handler={handleClick} num={"4"} />));
    fireEvent.click(screen.getByText(/4/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
