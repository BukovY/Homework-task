import React from "react";
import { store } from "../../redux/store";
import MetaBlock from "../../components/MetaBlock/MetaBlock";
import "./ActorPage.css";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import FilmCard from "../../components/FilmCard/FilmCard";

const ActorPage = () => {
  const person = store.peopleDetails;
  const photo = store.peopleImages;
  const knownBy = store.knownBy;
  console.log(knownBy);
  return (
    <div className="actor_page">
      <div className="actor-info">
        <div>
          <PhotoCard path={person.profile_path} />
        </div>
        <div className="actor_info">
          <h1>{person.name}</h1>
          <MetaBlock title="Birthbay" meta={person.birthday} />
          <MetaBlock title="Place of birth" meta={person.place_of_birth} />
          <MetaBlock title="Biography" meta={person.biography} />
          <h2>Photos</h2>
          <div className="photo_grid">
            {photo.map((el) => (
              <PhotoCard key={el.file_path} path={el.file_path} />
            ))}
          </div>
        </div>
      </div>
      <h2>Knowh by</h2>
      <div className="known_by">
        {knownBy.map((el) => (
          <FilmCard
            key={el.id}
            id={el.id}
            img={el.poster_path}
            rating={el.vote_average}
            title={el.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default ActorPage;
