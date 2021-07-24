import React from "react";
import './Pagination.css'

function Pagination({num, active, changePaginationPage}) {
    return <div className={active ? 'pagination pagination_active' : 'pagination'}
                onClick={() => changePaginationPage(num)}>{num}</div>;
}

export default Pagination;