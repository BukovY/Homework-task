import React from "react";
import './App.css';
import {store} from "./redux/store";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";

function App() {
    const page = store.selectPage
    return (
        <>
            <Header/>
            {page === 'main' ? <Homepage/> : ''}

        </>
    );
}

export default App;
