import React from "react";
import {store} from "../../redux/store";
import Tabs from "../../components/Tabs/Tabs";
import FilmCard from "../../components/FilmCard/FilmCard";
import Paginations from "../../components/Pagination/Paginations";

function genresIndexToString(arr, map){
    let genresToRender = [];
    for(let i of map){
        if(arr.indexOf(i.id) !== -1){
            genresToRender.push(i.name)
        }
    }
    return genresToRender
}

function Homepage() {
    const film = store.filmData
    const genresMap = store.genresMap
    return (<div>
            <Tabs/>
            <div className='film_card_grid'>
            {film.map(el => <FilmCard key={el.id} img={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} rating={el.vote_average} title={el.original_title} genres={genresIndexToString(el.genre_ids, genresMap)}/>)}
            </div>
            <Paginations/>
        </div>
    );
}

export default Homepage;
