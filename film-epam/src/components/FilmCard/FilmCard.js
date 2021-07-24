import React from "react";
import './FilmCard.css'
import play from '../../src/img/play.svg'
import {store} from "../../redux/store";
import {rerender} from "../../index";

function FilmCard({img, rating, title, genres, id}) {
    const openFilm = (id) => {
        store.selectedFilm = id;
        store.isTooltipLanguageOpen = false;
        store.selectPage = 'movie'
        rerender()
    }
    return (
        <div className='card'>
            <div className={rating < 7 ? 'rating rating_down' : 'rating rating_up'}>{rating}</div>
            <div className='film_cover'>
                <img src={`https://image.tmdb.org/t/p/w500/${img}`} className='film_cover' alt={title}
                     onClick={() => openFilm(id)}/>
                <img src={play} width='50px' className='play_film' alt='play'/>
            </div>
            {title ? <div className='title'>{title}</div> : ''}
            {genres ? <div className='genres'>{genres.join(" ")}</div> : ''}
        </div>
    );
}

export default FilmCard;