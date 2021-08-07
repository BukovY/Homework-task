import { render } from "@testing-library/react";
import React from "react";
import App from "./App";
import rerender from "react-test-renderer";
import { wrapperProvider } from "./utils/functrions";
import { Provider } from "react-redux";
import store from "./redux/store";
import { MemoryRouter } from "react-router-dom";

describe("Testing <App/> Component", () => {
  it("App view correct", () => {
    const tree = rerender.create(wrapperProvider(<App />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

export const memoryRouterWrapper = (path) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
};
describe("Router testing", () => {
  it("No found page /hhhhh", () => {
    const { getByText } = render(memoryRouterWrapper("/hhhhh"));
    expect(getByText("Unfortunately, there is no page")).toBeInTheDocument();
  });
  it("No found page /movie", () => {
    const { getByText } = render(memoryRouterWrapper("/movie"));
    expect(getByText("Unfortunately, there is no page")).toBeInTheDocument();
  });
  it("Incorrect movie page /movie/451048r", () => {
    const { getByText } = render(memoryRouterWrapper("/movie/451048r"));
    expect(getByText("Invalid request")).toBeInTheDocument();
    expect(getByText("*/movie/")).toBeInTheDocument();
    expect(getByText("To main")).toBeInTheDocument();
  });
  it("Incorrect actor page /actor/5081trw", () => {
    const { getByText } = render(memoryRouterWrapper("/actor/5081trw"));
    expect(getByText("Invalid request")).toBeInTheDocument();
    expect(getByText("*/actor/")).toBeInTheDocument();
    expect(getByText("To main")).toBeInTheDocument();
  });
});
