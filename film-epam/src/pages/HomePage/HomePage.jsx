import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import Paginations from "../../components/Pagination/Paginations";

import { genresIndexToString } from "../../utils/functrions";
import s from "./HomePage.module.sass";

const HomePage = () => {
  return (
    <div>
      <Tabs />

      <Paginations />
    </div>
  );
};

/*
import FilmCard from "../../components/FilmCard/FilmCard";

<div className={s.film_card_grid}>
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

      
 */
export default HomePage;
