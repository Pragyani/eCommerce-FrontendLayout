import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavbarList = () => {
    return (
        <>
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
                    <Button><Link>Mega Menu  <KeyboardArrowDownIcon className="droper" /></Link></Button>
                    <div className="droperMenu">
                        <ul>
                            <li><Button><Link to="/about">About us</Link></Button></li>
                            <li><Button><Link to="/about">Register</Link></Button></li>
                            <li><Button><Link to="/about">Forget Password</Link></Button></li>
                            <li><Button><Link to="/about">Reset Password</Link></Button></li>
                            <li><Button><Link to="/about">Purchase Guide </Link></Button></li>
                            <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                            <li><Button><Link to="/about">Terms of Services</Link></Button></li>
                            <li><Button><Link to="/about">404 Page</Link></Button></li>
                        
                        </ul>

                    </div>
                </li>

                <li className="list-items">
                    <Button><Link>Blog</Link></Button>
                </li>

                <li className="list-items">
                    <Button><Link>Pages <KeyboardArrowDownIcon className="droper" /></Link></Button>
                    <div className="droperMenu">
                        <ul>
                            <li><Button><Link to="/about">About us</Link></Button></li>
                            <li><Button><Link to="/about">Register</Link></Button></li>
                            <li><Button><Link to="/about">Forget Password</Link></Button></li>
                            <li><Button><Link to="/about">Reset Password</Link></Button></li>
                            <li><Button><Link to="/about">Purchase Guide </Link></Button></li>
                            <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                            <li><Button><Link to="/about">Terms of Services</Link></Button></li>
                            <li><Button><Link to="/about">404 Page</Link></Button></li>
                        
                        </ul>

                    </div>
                </li>

                <li className="list-items">
                    <Button><Link>Contact</Link></Button>
                </li>
            </ul>
        </>
    )
}
export default NavbarList;