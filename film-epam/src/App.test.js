import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { PhotoCard } from "./components/PhotoCard";
import { Search } from "./components/Search";
import { Paginations } from "./components/Pagination";
import { MetaBlock } from "./components/MetaBlock";
import { IncorrectRequest } from "./components/IncorrectRequest";
import { LanguageSelect } from "./components/Language/components/LanguageSelect";
import { Pagination } from "./components/Pagination/components/Parination";
import { People } from "./components/People";
import { FilmCard } from "./components/FilmCard";
import { FilmCover } from "./components/FilmCover";
import { Tab } from "./components/Tabs/components/Tab";

const wrapper = (component) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
};

const routerWrapper = (path) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
};
describe("Markup testing", () => {
  it("Tab in document ", () => {
    render(wrapper(<App />));
    screen.debug();
    expect(screen.getByText(/Popular/i)).toBeInTheDocument();
    expect(screen.getByText(/Top rated/i)).toBeInTheDocument();
    expect(screen.getByText(/Upcoming/i)).toBeInTheDocument();
  });
  it("Language in component", () => {
    render(wrapper(<App />));
    screen.debug();
    expect(screen.getByText(/EN/i)).toBeInTheDocument();
  });
  it("Search has placeholder", () => {
    render(wrapper(<Search />));
    screen.debug();
    expect(
      screen.getByPlaceholderText(/Movies, person, movie, theaters/i)
    ).toBeInTheDocument();
  });
  it("Photocard return img with alt", () => {
    render(wrapper(<PhotoCard path={null} />));
    screen.debug();
    expect(screen.getByAltText(/PhotoCard/i)).toBeInTheDocument();
  });
  it("Metcblock view correct", () => {
    render(<MetaBlock meta={"meta text"} prefix={"prefix"} title={"title"} />);
    screen.debug();
    expect(screen.getByText(/meta text/i)).toBeInTheDocument();
    expect(screen.getByText(/prefix/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
  it("Incorrect result path correct view", () => {
    render(wrapper(<IncorrectRequest path={"path"} />));
    screen.debug();
    expect(screen.getByText(/path/i)).toBeInTheDocument();
  });
  it("Language select view", () => {
    render(wrapper(<LanguageSelect language={"EN"} display={"ENGLISH"} />));
    screen.debug();
    expect(screen.getByText(/ENGLISH/i)).toBeInTheDocument();
  });
  it("People card is correct", () => {
    render(
      <People
        el={{ original_name: "Sara Connor", known_for_department: "HR" }}
      />
    );
    screen.debug();
    expect(screen.getByText(/Sara Connor/i)).toBeInTheDocument();
    expect(screen.getByText(/HR/i)).toBeInTheDocument();
  });
  it("Film card is correct", () => {
    const el = {
      title: "Title film",
      vote_average: 7.8,
    };
    render(wrapper(<FilmCard el={el} />));
    screen.debug();
    expect(screen.getByText(el.title)).toBeInTheDocument();
    expect(screen.getByText(el.vote_average.toFixed(1))).toBeInTheDocument();
    expect(screen.getByAltText(/Play/i)).toBeInTheDocument();
    expect(screen.getByAltText(el.title)).toBeInTheDocument();
  });
  it("Film cover is correct", () => {
    const el = {
      title: "Title film",
      vote_average: 7.8,
    };
    render(<FilmCover el={el} />);
    screen.debug();
    expect(screen.getByText(el.vote_average.toFixed(1))).toBeInTheDocument();
    expect(screen.getByAltText(/Cover/i)).toBeInTheDocument();
  });
  it("Tab is correct", () => {
    render(wrapper(<Tab display={["SOME", "SOME", "SOME"]} />));
    screen.debug();
    expect(screen.getByText(/some/i)).toBeInTheDocument();
  });
});

describe("Event testing", () => {
  it("Change pagination", () => {
    const handleClick = jest.fn();
    render(wrapper(<Paginations handler={handleClick} max={5} />));
    screen.debug();
    fireEvent.click(screen.getByText(/1/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("Change pagination 2 level in", () => {
    const handleClick = jest.fn();
    render(wrapper(<Pagination handler={handleClick} num={"4"} />));
    screen.debug();
    fireEvent.click(screen.getByText(/4/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("Router testing", () => {
  it("No found page /hhhhh", () => {
    const { getByText } = render(routerWrapper("/hhhhh"));
    expect(getByText("Unfortunately, there is no page")).toBeInTheDocument();
  });
  it("No found page /movie", () => {
    const { getByText } = render(routerWrapper("/movie"));
    expect(getByText("Unfortunately, there is no page")).toBeInTheDocument();
  });
  it("Incorrect movie page /movie/451048r", () => {
    const { getByText } = render(routerWrapper("/movie/451048r"));
    expect(getByText("Invalid request")).toBeInTheDocument();
    expect(getByText("*/movie/")).toBeInTheDocument();
    expect(getByText("To main")).toBeInTheDocument();
  });
  it("Incorrect actor page /actor/5081trw", () => {
    const { getByText } = render(routerWrapper("/actor/5081trw"));
    expect(getByText("Invalid request")).toBeInTheDocument();
    expect(getByText("*/actor/")).toBeInTheDocument();
    expect(getByText("To main")).toBeInTheDocument();
  });
});
