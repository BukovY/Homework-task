import React from "react";
import styles from "./ActorPage.module.sass";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useSelector } from "react-redux";
import { genresIndexToString } from "../../utils/functrions";

const ActorPage = () => {
  const { data } = useSelector((state) => state.actorReducers);
  const { genresMap } = useSelector((state) => state.appReducer);
  const person = data.info;
  return (
    <div className={styles.actor_page}>
      <div className={styles.actor_info}>
        <div>
          <PhotoCard path={person.profile_path} />
        </div>
        <div>
          <h1>{person.name}</h1>
          <MetaBlock title="Birthbay" meta={person.birthday} />
          <MetaBlock title="Place of birth" meta={person.place_of_birth} />
          <MetaBlock title="Biography" meta={person.biography} />
          <h2 className={data.photo.length !== 0 ? "" : styles.hide}>Photos</h2>
          <div className={styles.actor_grid}>
            {data.photo &&
              data.photo.map((el) => (
                <PhotoCard key={el.file_path} path={el.file_path} />
              ))}
          </div>
        </div>
      </div>
      <h2>Knowh by</h2>
      <div className={styles.actor_grid}>
        {data.knownBy &&
          data.knownBy.map((el) => (
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

export default ActorPage;
