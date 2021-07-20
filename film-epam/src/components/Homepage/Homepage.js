import React from "react";
import {store} from "../../redux/store";
import Selectors from "./Selector/Selector";
import FilmCard from "../cards/FilmCard/FilmCard";

function Homepage() {
    const film = store.filmData
    return (<>
            <Selectors/>
            {film.map(el => <FilmCard key={el.id} props={el}/>)}
        </>
    );
}

export default Homepage;
