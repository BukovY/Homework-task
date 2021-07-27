import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import Paginations from "../../components/Pagination/Paginations";
import FilmCard from "../../components/FilmCard/FilmCard";
import { genresIndexToString } from "../../utils/functrions";
import styles from "./HomePage.module.sass";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { filmData, genresMap } = useSelector((state) => state.appReducer);
  return (
    <div>
      <Tabs />
      <div className={styles.film_card_grid}>
        {filmData.map((el) => (
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
      <Paginations />
    </div>
  );
};

/*




      
 */
export default HomePage;
