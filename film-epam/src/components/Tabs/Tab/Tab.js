import React from "react";
import './Tab.css'
const Tab = ({label, status, changeTab}) => {
    return (
        <div className={status === 'active' ? 'tab tab_active' : 'tab'} onClick={()=>changeTab(label)}>
            {label}
        </div>
    );
}
export default Tab