import React from "react";
import { store } from "../../redux/store";
import FilmCard from "../../components/FilmCard/FilmCard";
import s from "./MoviePage.module.sass";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import People from "../../components/People/People";
import { genresIndexToString, minToTime } from "../../utils/functrions";
import { rerender } from "../../index";
import k from '../../static/GridCard.module.sass'

const MoviePage = () => {
  const selectedFilmId = store.selectedFilm;
  const films = store.movieBase;
  const filmToRender = films.filter((el) => el.id === selectedFilmId)[0];
  const genres = filmToRender.genres.map((el) => el.name);
  const isAllCrewOpen = store.isAllCrewOpen;
  const crewToRender = isAllCrewOpen ? store.crews : store.crews.slice(0, 6);
  const film = store.filmData.slice(0, 6);
  const genresMap = store.genresMap;

  const changeOpenCrew = () => {
    store.isAllCrewOpen = !store.isAllCrewOpen;
    rerender();
  };
  return (
    <div>
      <div className={s.film_info}>
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
          {genres.map((el) => (
            <div key={el} className={s.genre}>
              {el}
            </div>
          ))}
          <div>
            <div className={s.crew_box_head}>
              <h2>Top Billied Cast</h2>
              <button
                className={isAllCrewOpen ? `${s.active}` : ""}
                onClick={() => {
                  changeOpenCrew();
                }}
              >
                Show All
              </button>
            </div>
            <div className={s.card_grid}>
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
        <div className={s.card_grid}>
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
    </div>
  );
};
export default MoviePage;
