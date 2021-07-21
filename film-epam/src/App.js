import React from "react";
import './App.css';
import {store} from "./redux/store";
import Homepage from "./Pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Movie from "./Pages/Movie/Movie";

function App() {
    const page = store.selectPage
    return (
        <div>
            <Header/>
            {page === 'main' ? <Homepage/> : ''}
            {page === 'actor' ? '' : ''}
            {page === 'movie' ? <Movie/> : ''}
        </div>
    );
}

export default App;
