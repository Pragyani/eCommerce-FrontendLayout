import React from "react";
import NavContent from "./Nav-Content/navContainer";
import './nav.css'


const Nav = (props) => {
    const {data}=props;
    return (
        <>
            <div className="nav ">
             <NavContent nData={data}/>
            </div>

        </>
    )
}

export default Nav; 