import React, { useEffect } from "react";
import styles from "./ActorPage.module.sass";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { getActorInfo } from "../../redux/reducers/actorReducers";
import LoaderPlaceholder from "../../components/LoarerPlaceholder/LoaderPlaceholder";

const ActorPage = () => {
  const { data, actorId, actorNeedUpdate, fetchingActor } = useSelector(
    (state) => state.actor
  );
  const { languageSelected } = useSelector((state) => state.app);
  const person = data.info;
  const dispatch = useDispatch();

  useEffect(() => {
    if (actorNeedUpdate) {
      const inputs = {
        actorId,
        languageSelected,
      };
      dispatch(getActorInfo(inputs));
    }
  }, [actorNeedUpdate]);

  return (
    <div>
      {!fetchingActor ? (
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
              <h2 className={!data.photo.length && styles.hide}>Photos</h2>
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
              data.knownBy.map((el) => <FilmCard key={el.id} el={el} />)}
          </div>
        </div>
      ) : (
        <LoaderPlaceholder />
      )}
    </div>
  );
};

export default ActorPage;
