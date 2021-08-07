import React, { useEffect } from "react";
import styles from "./HomePage.module.sass";
import { Paginations } from "../../components/Pagination";
import { FilmCard } from "../../components/FilmCard";
import { useSelector, useDispatch } from "react-redux";
import { setPaginationPage } from "../../redux/actions/appAction";
import { Tabs } from "../../components/Tabs";
import { LoaderPlaceholder } from "../../components/LoarerPlaceholder";
import { getFilmsData } from "../../redux/reducers/appReducers";

const HomePage = () => {
  const {
    filmData,
    paginationPage,
    paginationMax,
    activeFilter,
    languageSelected,
    isFetching,
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const selectPaginationPage = (num) => {
    dispatch(setPaginationPage(num));
  };

  useEffect(() => {
    const inputs = {
      activeFilter,
      languageSelected,
      paginationPage,
    };
    dispatch(getFilmsData(inputs));
  }, [paginationPage, languageSelected, activeFilter]);
  return (
    <div>
      <Tabs />
      {!isFetching ? (
        <div>
          <div className={styles.film_card_grid}>
            {filmData.map((el) => (
              <FilmCard key={el.id} el={el} />
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
