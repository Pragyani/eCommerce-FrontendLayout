import React from "react";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from "react-router-dom";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';


const NavContent =()=>{
    return(
        <>
           <div className="container">
                    <div className="row-line">

                        <div className="browser-block">
                            <Button className="bgtext"><GridViewIcon className="grid-icon" />Browse All Categories <KeyboardArrowDownIcon /></Button>
                        </div>

                        <div className="nav-content">
                            <nav>
                                <ul className="nav-list-item">
                                    <li className="list-items">
                                        <Button><Link>Home</Link></Button>
                                    </li>

                                    <li className="list-items">
                                        <Button><Link>About</Link></Button>
                                    </li>

                                    <li className="list-items">
                                        <Button><Link>Shop</Link></Button>
                                    </li>

                                    <li className="list-items">
                                        <Button><Link>Vendors</Link></Button>
                                    </li>

                                    <li className="list-items">
                                        <Button><Link>Mega Menu  <KeyboardArrowDownIcon  className="droper"/></Link></Button>
                                    </li>

                                    <li className="list-items">
                                        <Button><Link>Blog</Link></Button>
                                    </li>

                                    <li className="list-items">
                                        <Button><Link>Pages <KeyboardArrowDownIcon  className="droper"/></Link></Button>
                                    </li>

                                    <li className="list-items">
                                        <Button><Link>Contact</Link></Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="contact-block">
                            <div className="phneIcon">
                                <span><HeadsetMicIcon/></span>
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