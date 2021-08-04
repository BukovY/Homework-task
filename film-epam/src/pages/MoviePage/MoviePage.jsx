import React, { useEffect } from "react";
import styles from "./MoviePage.module.sass";
import FilmCover from "../../components/FilmCover/FilmCover";
import FilmCard from "../../components/FilmCard/FilmCard";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import People from "../../components/People/People";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { getIndexLanguage, minToTime } from "../../utils/functrions";
import { useSelector, useDispatch } from "react-redux";
import { crewOpenChange } from "../../redux/actions/movieAction";
import { getFilm } from "../../redux/reducers/movieReducers";
import LoaderPlaceholder from "../../components/LoarerPlaceholder/LoaderPlaceholder";
import { moviePageTranslation } from "../../static/Translation";
import { useParams } from "react-router";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviePage = () => {
  const { data, isCrewOpen, fetchingFilm } = useSelector(
    (state) => state.movie
  );
  const { languageSelected } = useSelector((state) => state.app);
  const film = data.info;
  const crew = data.people
    ? isCrewOpen
      ? data.people
      : data.people.slice(0, 6)
    : false;
  const dispatch = useDispatch();
  const changeOpenCrew = (status) => {
    let toDispatch = status;
    dispatch(crewOpenChange(!toDispatch));
  };
  const indexLang = getIndexLanguage(languageSelected);

  const { id } = useParams();

  useEffect(() => {
    const input = {
      selectedMovie: id,
      languageSelected,
    };
    dispatch(getFilm(input));
  }, [languageSelected, id]);

  return (
    <div>
      {!film.title && !fetchingFilm && <NotFoundPage />}
      {fetchingFilm && <LoaderPlaceholder />}
      {!fetchingFilm && film.title && (
        <div>
          <div className={styles.film_info}>
            <FilmCover el={film} />
            <div>
              <p>{moviePageTranslation.title[indexLang]}</p>
              <h1>{film.title}</h1>
              <MetaBlock
                title={moviePageTranslation.overview[indexLang]}
                meta={film.overview}
              />
              <MetaBlock
                title={moviePageTranslation.releaseDate[indexLang]}
                meta={film.release_date}
              />
              <MetaBlock
                title={moviePageTranslation.revenue[indexLang]}
                meta={film.revenue}
                prefix="$"
              />
              <MetaBlock
                title={moviePageTranslation.duration[indexLang]}
                meta={minToTime(film.runtime)}
              />
              {film.genres &&
                film.genres.map((el) => (
                  <div key={el.name} className={styles.genre}>
                    {el.name}
                  </div>
                ))}
              <div>
                <div className={styles.crew_box_head}>
                  <h2>{moviePageTranslation.topBiledCast[indexLang]}</h2>
                  <button
                    className={isCrewOpen && styles.active}
                    onClick={() => changeOpenCrew(isCrewOpen)}
                  >
                    {isCrewOpen
                      ? moviePageTranslation.close[indexLang]
                      : moviePageTranslation.showAll[indexLang]}
                  </button>
                </div>
                <div className={styles.card_grid}>
                  {crew && crew.map((el) => <People key={el.id} el={el} />)}
                </div>
              </div>
              <h2 className={!data?.images?.length && styles.hide}>
                {moviePageTranslation.images[indexLang]}
              </h2>
              <div className={styles.images_grid}>
                {data.images &&
                  data.images.map((el) => (
                    <PhotoCard key={el.file_path} path={el.file_path} />
                  ))}
              </div>
            </div>
          </div>
          <h2 className={!data?.known?.length && styles.hide}>
            {moviePageTranslation.recomendations[indexLang]}
          </h2>
          <div className={styles.card_grid}>
            {data.known &&
              data.known.map((el) => <FilmCard key={el.id} el={el} />)}
          </div>
        </div>
      )}
    </div>
  );
};
export default MoviePage;
