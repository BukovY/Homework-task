import React from "react";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useSelector } from "react-redux";
import {genresIndexToString} from "../../utils/functrions";
import styles from './SearchPage.module.sass'
import Paginations from "../../components/Pagination/Paginations";
import {useDispatch} from "react-redux";
import {setSearchPage} from '../../redux/actions/searchAction'
import {setTooltipOpenStatus} from "../../redux/actions/appAction";


const SearchPage = () => {
    const { genresMap } = useSelector((state) => state.appReducer);
    const { searchResults, searchPage, searchMaxPage } = useSelector((state) => state.searchReducers);
    const dispatch = useDispatch()
    const changeSearchPaginationPage = (num) =>{
        dispatch(setSearchPage(num))
        dispatch(setTooltipOpenStatus(false))
    }
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
            <Paginations selected={searchPage} max={searchMaxPage} handler={changeSearchPaginationPage}/>
        </div>
    );
};
/*

 */

export default SearchPage;
