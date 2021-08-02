import React from "react";
import styles from "./MoviePage.module.sass";
import FilmCover from "../../components/FilmCover/FilmCover";
import FilmCard from "../../components/FilmCard/FilmCard";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import People from "../../components/People/People";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { genresIndexToString, minToTime } from "../../utils/functrions";
import { useSelector, useDispatch } from "react-redux";
import { crewOpenChange } from "../../redux/actions/movieAction";

const MoviePage = () => {
  const { data, isCrewOpen } = useSelector((state) => state.movieReducers);
  const { genresMap } = useSelector((state) => state.appReducer);
  const filmToRender = data.info;
  const crewToRender = isCrewOpen ? data.people : data.people.slice(0, 6);
  const dispatch = useDispatch();
  const changeOpenCrew = (status) => {
    let toDispatch = status;
    dispatch(crewOpenChange(!toDispatch));
  };
  return (
    <div>
      <div className={styles.film_info}>
        <FilmCover
          img={filmToRender.poster_path}
          rating={filmToRender.vote_average}
        />
        <div>
          <p>Title</p>
          <h1>{filmToRender.title}</h1>
          <MetaBlock title="Overview" meta={filmToRender.overview} />
          <MetaBlock title="Release date" meta={filmToRender.release_date} />
          <MetaBlock title="Revenue" meta={filmToRender.revenue} prefix="$" />
          <MetaBlock title="Duration" meta={minToTime(filmToRender.runtime)} />
          {filmToRender.genres &&
            filmToRender.genres.map((el) => (
              <div key={el.name} className={styles.genre}>
                {el.name}
              </div>
            ))}
          <div>
            <div className={styles.crew_box_head}>
              <h2>Top Billied Cast</h2>
              <button
                className={isCrewOpen ? `${styles.active}` : ""}
                onClick={() => changeOpenCrew(isCrewOpen)}
              >
                {isCrewOpen ? "Close" : "Show all"}
              </button>
            </div>
            <div className={styles.card_grid}>
              {crewToRender &&
                crewToRender.map((el) => (
                  <People
                    key={el.id}
                    img={el.profile_path}
                    title={el.original_name}
                    department={el.known_for_department}
                    id={el.id}
                  />
                ))}
            </div>
          </div>
          <h2 className={data.images.length !== 0 ? "" : styles.hide}>
            Images
          </h2>
          <div className={styles.images_grid}>
            {data.images &&
              data.images.map((el) => (
                <PhotoCard key={el.file_path} path={el.file_path} />
              ))}
          </div>
        </div>
      </div>
      <h2 className={data.known.length !== 0 ? "" : styles.hide}>
        Recomendations
      </h2>
      <div className={styles.card_grid}>
        {data.known &&
          data.known.map((el) => (
            <FilmCard
              key={el.id}
              id={el.id}
              img={el.poster_path}
              rating={el.vote_average}
              title={el.title}
              genres={genresIndexToString(el.genre_ids, genresMap)}
            />
          ))}
      </div>
    </div>
  );
};
export default MoviePage;
