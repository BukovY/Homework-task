import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import Paginations from "../../components/Pagination/Paginations";
import FilmCard from "../../components/FilmCard/FilmCard";
import { genresIndexToString } from "../../utils/functrions";
import styles from "./HomePage.module.sass";
import { useSelector, useDispatch } from "react-redux";
import {
  setPaginationPage,
  setTooltipOpenStatus,
} from "../../redux/actions/appAction";

const HomePage = () => {
  const { filmData, genresMap, paginationPage, paginationMax } = useSelector(
    (state) => state.appReducer
  );
  const dispatch = useDispatch();
  const selectPaginationPage = (num) => {
    dispatch(setPaginationPage(num));
    dispatch(setTooltipOpenStatus(false));
  };
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
      <Paginations
        selected={paginationPage}
        max={paginationMax}
        handler={selectPaginationPage}
      />
    </div>
  );
};

/*




      
 */
export default HomePage;
