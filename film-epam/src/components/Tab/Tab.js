import React from "react";
import './Tabs.css'

function Tab() {
    return (<div className='tabs'>
            <span className='tabs_active'>popular</span>
            <span>toprated</span>
            <span>upcoming</span>
        </div>
    );
}

export default Tab;