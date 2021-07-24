import React from "react";
import {store} from "../../redux/store";
import FilmCard from "../../components/FilmCard/FilmCard";
import './Movie.css'
import MetaBlock from "./MetaBlock/MetaBlock";
import People from "./People/People";
import {genresIndexToString} from "../Homepage/Homepage";


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