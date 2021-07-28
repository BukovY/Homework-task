import React from "react";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useSelector } from "react-redux";
import {genresIndexToString} from "../../utils/functrions";
import styles from './SearchPage.module.sass'

const SearchPage = () => {
    const { genresMap } = useSelector((state) => state.appReducer);
    const { searchResults } = useSelector((state) => state.searchReducers);
    return (
        <div>
            <div className={styles.card_grid}>
                {searchResults && searchResults.map((el) => (
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
/*

 */

export default SearchPage;
