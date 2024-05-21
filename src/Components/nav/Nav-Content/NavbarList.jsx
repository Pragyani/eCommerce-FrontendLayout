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
                </li>

                <li className="list-items">
                    <Button><Link>Blog</Link></Button>
                </li>

                <li className="list-items">
                    <Button><Link>Pages <KeyboardArrowDownIcon className="droper" /></Link></Button>
                </li>

                <li className="list-items">
                    <Button><Link>Contact</Link></Button>
                </li>
            </ul>
        </>
    )
}
export default NavbarList;