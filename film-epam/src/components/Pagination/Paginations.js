import React from "react";
import {store} from "../../redux/store";
import {MAX_PAGINATION_PAGES} from "../../redux/constants";
import Pagination from "./Item/Pagination";
import './Paginations.css'
import {rerender} from "../../index";

function Paginations() {
    const maxPage = MAX_PAGINATION_PAGES
    const selectPage = store.paginationPage
    const pagination = Array(maxPage).fill(1).reduce((prev, next, index) => {return [...prev, index+1]},[])

    const changePaginationPage = (el) => {
        store.paginationPage = el
        rerender()
    }
    return (<div className='pagination_box'>
            {pagination.map((el) => <Pagination key={el} num={el} active={el===selectPage} changePaginationPage={changePaginationPage}/>)}
        </div>
    );
}

export default Paginations;