import React from "react";
import Button from '@mui/material/Button';
import "./nav.css"
 
const Nav =()=>{
    return(
        <>
        <div className="nav">
            <div className="container d-flex">
                <div className="row-line">
                    <div className="browser-block">
                    <Button>Browse All Categories</Button>
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