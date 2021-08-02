import React from "react";
import styles from "./HomePage.module.sass";
import Paginations from "../../components/Pagination/Paginations";
import FilmCard from "../../components/FilmCard/FilmCard";
import { genresIndexToString } from "../../utils/functrions";
import { useSelector, useDispatch } from "react-redux";
import {
  setPaginationPage,
  isTooltipOpen,
} from "../../redux/actions/appAction";
import Tabs from "../../components/Tabs/Tabs";
import LoaderPlaceholder from "../../components/LoarerPlaceholder/LoaderPlaceholder";

const HomePage = () => {
  const { filmData, genresMap, paginationPage, paginationMax, isFetching } =
    useSelector((state) => state.app);
  const dispatch = useDispatch();
  const selectPaginationPage = (num) => {
    dispatch(setPaginationPage(num));
    dispatch(isTooltipOpen(false));
  };
  return (
    <div>
      <Tabs />
      {!isFetching ? (
        <div>
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
      ) : (
        <LoaderPlaceholder />
      )}
    </div>
  );
};

export default HomePage;
