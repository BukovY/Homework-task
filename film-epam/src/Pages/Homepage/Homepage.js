import React from "react";
import {store} from "../../redux/store";
import Tab from "../../components/Tab/Tab";
import FilmCard from "../../components/FilmCard/FilmCard";

function Homepage() {
    const film = store.filmData
    return (<div>
            <Tab/>
            {film.map(el => <FilmCard key={el.id} props={el}/>)}
        </div>
    );
}

export default Homepage;
