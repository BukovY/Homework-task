import React, { useEffect } from "react";
import styles from "./HomePage.module.sass";
import Paginations from "../../components/Pagination/Paginations";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useSelector, useDispatch } from "react-redux";
import {
  setPaginationPage,
  isTooltipOpen,
} from "../../redux/actions/appAction";
import Tabs from "../../components/Tabs/Tabs";
import LoaderPlaceholder from "../../components/LoarerPlaceholder/LoaderPlaceholder";
import { getFilmsData } from "../../redux/reducers/appReducers";

const HomePage = () => {
  const {
    filmData,
    paginationPage,
    paginationMax,
    homepageNeedUpdate,
    activeFilter,
    languageSelected,
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const selectPaginationPage = (num) => {
    dispatch(setPaginationPage(num));
    dispatch(isTooltipOpen(false));
  };

  useEffect(() => {
    if (homepageNeedUpdate) {
      const inputs = {
        activeFilter,
        languageSelected,
        paginationPage,
      };
      dispatch(getFilmsData(inputs));
    }
  }, [homepageNeedUpdate, paginationPage]);
  return (
    <div>
      <Tabs />
      {!homepageNeedUpdate ? (
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
