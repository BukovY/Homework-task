import React from "react";
import './Pagination.css'

const Pagination=({num, active, changePaginationPage}) =>{
    return <div className={active ? 'pagination pagination_active' : 'pagination'}
                onClick={() => changePaginationPage(num)}>{num}</div>;
}

export default Pagination;