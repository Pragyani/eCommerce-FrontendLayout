import React from "react";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import NavbarList from "./NavbarList";


const NavContent = (props) => {
    const {nData}=props;
    return (
        <>
            <div className="container">
                <div className="row-line ">

                    <div className="browser-block">
                        <Button className="bgtext"><GridViewIcon className="grid-icon" />Browse All Categories <KeyboardArrowDownIcon /></Button>
                    </div>
 
                    <div className="nav-content ">
                        <nav>
                            <NavbarList NavData={nData}/>
                        </nav> 
                    </div>

                    <div className="contact-block">
                        <div className="phneIcon">
                            <span><HeadsetMicIcon /></span>
                            <div className="info-phneicon">
                                <h2 className="textno">1900-888</h2>
                                <p className="txt">24/7 Support Center</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default NavContent;