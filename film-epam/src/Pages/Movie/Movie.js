import React from "react";
import {store} from "../../redux/store";
import FilmCard from "../../components/FilmCard/FilmCard";
import './Movie.css'
import MetaBlock from "./MetaBlock/MetaBlock";
import People from "./People/People";
import {genresIndexToString} from "../Homepage/Homepage";


/*
{"adult":false,"backdrop_path":"/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg","belongs_to_collection":null,"budget":200000000,
"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":53,"name":"Thriller"},{"id":878,"name":"Science Fiction"}],
"homepage":"https://www.marvel.com/movies/black-widow",
"id":497698,"imdb_id":"tt3480822",
"original_language":"en",
"original_title":"Black Widow",
"overview":"Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
"popularity":8127.332,
"poster_path":"/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
"production_companies":[{"id":420,"logo_path":"/hUzeosd33nzE5MCNsZxCGEKTXaQ.png","name":"Marvel Studios","origin_country":"US"}],
"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],
"release_date":"2021-07-07",
"revenue":251401120,
"runtime":134,
"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"},{"english_name":"Russian","iso_639_1":"ru","name":"Pусский"}],
"status":"Released",
"tagline":"She's Done Running From Her Past.",
"title":"Black Widow",
"video":false,
"vote_average":8.0,
"vote_count":2968}
 */
function minToTime(num) {
    let min = num % 60
    let hour = (num - min) / 60
    return String(hour) + ':' + String(min)
}

const Movie = () => {
    const selectedFilmId = store.selectedFilm
    const films = store.movieBase
    const filmToRender = films.filter(el => el.id === selectedFilmId)[0]
    const genres = filmToRender.genres.map(el => el.name)
    const isAllCrewOpen = store.isAllCrewOpen
    const crewToRender = isAllCrewOpen ? store.crew : store.crew.slice(0, 6)
    const film = store.filmData.slice(0, 6)
    const genresMap = store.genresMap
    return (<div>
        <div className='film_info'>
            <div className='card'>
                <FilmCard img={filmToRender.poster_path} rating={filmToRender.vote_average}/>
            </div>
            <div className='info'>
                <p>Title</p>
                <h1>{filmToRender.original_title}</h1>
                <MetaBlock title='Overview' meta={filmToRender.overview}/>
                <MetaBlock title='Release date' meta={filmToRender.release_date}/>
                <MetaBlock title='Revenue' meta={filmToRender.revenue} prefix='$'/>
                <MetaBlock title='Duration' meta={minToTime(filmToRender.runtime)}/>
                {genres.map(el => <div className='genre'>{el}</div>)}
                <div className='crew_box'>
                    <div className='crew_box_head'><h2>Top Billied Cast</h2>
                        <button className={isAllCrewOpen ? 'active' : ''}>Show All</button>
                    </div>
                    <div className='crew_box_cards'>
                        {crewToRender.map(el => <People img={el.profile_path} title={el.original_name}
                                                        department={el.known_for_department}/>)}
                    </div>
                </div>
            </div>
        </div>
        <div className='recomendations'>
            <h2>Recomendations</h2>
            <div className='recomendations_grid'>
                {film.map(el => <FilmCard key={el.id} id={el.id} img={el.poster_path} rating={el.vote_average}
                                          title={el.original_title}
                                          genres={genresIndexToString(el.genre_ids, genresMap)}/>)}
            </div>
        </div>
    </div>)
}
export default Movie