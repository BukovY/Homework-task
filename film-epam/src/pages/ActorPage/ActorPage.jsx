import React from "react";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import styles from "./ActorPage.module.sass";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import FilmCard from "../../components/FilmCard/FilmCard";
import {useSelector} from "react-redux";

/*
    actorId: '',
    data: {
        info: {},
        photo: [],
        knownBy: []
    }
}
 */
const ActorPage = () => {
    const {data} = useSelector((state)=> state.actorReducers)
  const person = data.info;
  const photo = data.photo;
  const knownBy = data.knownBy;
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
          <h2>Photos</h2>
          <div className={styles.actor_grid}>
            {photo && photo.map((el) => (
              <PhotoCard key={el.file_path} path={el.file_path} />
            ))}
          </div>
        </div>
      </div>
      <h2>Knowh by</h2>
      <div className={styles.actor_grid}>
        {knownBy && knownBy.map((el) => (
          <FilmCard
            key={el.id}
            id={el.id}
            img={el.poster_path}
            rating={el.vote_average}
            title={el.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ActorPage;
