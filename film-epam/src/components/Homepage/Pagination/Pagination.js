import React from "react";
import {store} from "../../redux/store";
import {MAX_PAGINATION_PAGES} from "../../../redux/constants";

function Homepage() {
    const maxPage = MAX_PAGINATION_PAGES
    const selectPage = store.paginationPage
    let paginationItems = [];
    if (selectPage === 1) {
        paginationItems = [[1,1],['Next',2],['End',maxPage]]
    } else if (selectPage === 2) {
        paginationItems = [['Prev',1],[2,2],['Next',3],['End',maxPage]]
    } else if (selectPage > 2 && selectPage < maxPage - 1) {
        paginationItems = [['First',1],['Prev',selectPage - 1],[selectPage,selectPage],['Next',selectPage + 1],['End',maxPage]]
    } else if (selectPage === maxPage - 1) {
        paginationItems = [['First',1],['Prev',selectPage - 1],[selectPage,selectPage],['End',maxPage]]
    } else if (selectPage === maxPage) {
        paginationItems = [['First',1],['Prev',maxPage - 1],[selectPage,maxPage]]
    }
    return (<>

        </>
    );
}

export default Homepage;