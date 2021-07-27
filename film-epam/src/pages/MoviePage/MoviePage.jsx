import React from "react";
import { store } from "../../redux/store";
import FilmCard from "../../components/FilmCard/FilmCard";
import styles from "./MoviePage.module.sass";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import People from "../../components/People/People";
import { genresIndexToString, minToTime } from "../../utils/functrions";
import { rerender } from "../../index";

const MoviePage = () => {
  const filmToRender = store.movieBase.filter(
    (el) => el.id === store.selectedFilm
  )[0];
  const isAllCrewOpen = store.isAllCrewOpen;
  const crewToRender = isAllCrewOpen ? store.crews : store.crews.slice(0, 6);
  const film = store.filmData.slice(0, 6);
  const changeOpenCrew = () => {
    store.isAllCrewOpen = !store.isAllCrewOpen;
    rerender();
  };

  return (
    <div>
      <div className={styles.film_info}>
        <FilmCard
          img={filmToRender.poster_path}
          rating={filmToRender.vote_average}
        />
        <div>
          <p>Title</p>
          <h1>{filmToRender.original_title}</h1>
          <MetaBlock title="Overview" meta={filmToRender.overview} />
          <MetaBlock title="Release date" meta={filmToRender.release_date} />
          <MetaBlock title="Revenue" meta={filmToRender.revenue} prefix="$" />
          <MetaBlock title="Duration" meta={minToTime(filmToRender.runtime)} />
          {filmToRender.genres.map((el) => (
            <div key={el.name} className={styles.genre}>
              {el.name}
            </div>
          ))}
          <div>
            <div className={styles.crew_box_head}>
              <h2>Top Billied Cast</h2>
              <button
                className={isAllCrewOpen ? `${styles.active}` : ""}
                onClick={changeOpenCrew}
              >
                Show All
              </button>
            </div>
            <div className={styles.card_grid}>
              {crewToRender.map((el) => (
                <People
                  img={el.profile_path}
                  title={el.original_name}
                  department={el.known_for_department}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <h2>Recomendations</h2>
      <div className={styles.card_grid}>
        {film.map((el) => (
          <FilmCard
            key={el.id}
            id={el.id}
            img={el.poster_path}
            rating={el.vote_average}
            title={el.original_title}
            genres={genresIndexToString(el.genre_ids, store.genresMap)}
          />
        ))}
      </div>
    </div>
  );
};
export default MoviePage;
