import React from "react";
import Button from '@mui/material/Button';
import "./nav.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
 
const Nav =()=>{
    return(
        <>
        <div className="nav ">
            <div className="container">
                <div className="row-line">
                    
                    <div className="browser-block">
                    <Button className="bgtext"><GridViewIcon className="grid-icon"/>Browse All Categories <KeyboardArrowDownIcon/></Button>
                    </div>

                    <div className="nav-content">
                        <nav> </nav>
                    </div>

                    <div className="contact-block">
                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}

export default Nav;