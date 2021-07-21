import React from "react";
import './MetaBlock.css'

const MetaBlock = ({title, meta, prefix}) => {

    return(<div>
        <p className='meta_title'>{title}:</p>
        <p>{prefix? prefix: ''}{meta}</p>
    </div>)
}
export default MetaBlock