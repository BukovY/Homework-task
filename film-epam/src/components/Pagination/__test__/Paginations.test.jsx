import React from "react";
import rerender from "react-test-renderer";
import { Paginations } from "../Paginations";
import { fireEvent, render, screen } from "@testing-library/react";
import { Pagination } from "../components/Parination";
import { wrapperProvider } from "../../../utils/functrions";

describe("Testing <Paginations/> Component", () => {
  it("Pagination view correct", () => {
    const tree = rerender
      .create(
        wrapperProvider(
          <Paginations
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
    render(wrapperProvider(<Paginations handler={handleClick} max={5} />));
    fireEvent.click(screen.getByText(/1/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("Change pagination 2 level in", () => {
    const handleClick = jest.fn();
    render(wrapperProvider(<Pagination handler={handleClick} num={"4"} />));
    fireEvent.click(screen.getByText(/4/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
