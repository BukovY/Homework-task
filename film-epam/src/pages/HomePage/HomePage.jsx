import React from "react";
import { store } from "../../redux/store";
import Tabs from "../../components/Tabs/Tabs";
import FilmCard from "../../components/FilmCard/FilmCard";
import Paginations from "../../components/Pagination/Paginations";
import { genresIndexToString } from "../../utils/functrions";

const HomePage = () => {
  const film = store.filmData;
  const genresMap = store.genresMap;
  return (
    <div>
      <Tabs />
      <div className="film_card_grid">
        {film.map((el) => (
          <FilmCard
            key={el.id}
            id={el.id}
            img={el.poster_path}
            rating={el.vote_average}
            title={el.original_title}
            genres={genresIndexToString(el.genre_ids, genresMap)}
          />
        ))}
      </div>
      <Paginations />
    </div>
  );
};

export default HomePage;
