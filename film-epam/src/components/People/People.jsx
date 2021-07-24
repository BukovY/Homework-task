import React from "react";
import "./People.css";

const People = ({ img, title, department }) => {
  const imgPath =
    img === null
      ? "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
      : `https://image.tmdb.org/t/p/w500/${img}`;
  return (
    <div className="people_card">
      <img src={imgPath} className="people_cover" alt={title} />
      <p className="people_title">{title}</p>
      <p>{department}</p>
    </div>
  );
};
export default People
