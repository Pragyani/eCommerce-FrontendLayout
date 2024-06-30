import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const NavbarList = (props) => {

    const { NavData } = props;
    const [navBarData, setNavBarData] = useState([]);
    // console.log(navBarData, 'navBar')

    useEffect(() => {
        setNavBarData(NavData);

    }, [])

    return (
        <>
            <ul className="nav-list-item">
                <li className="list-items">
                    <Button><Link to='/'>Home</Link></Button>
                </li>
                {
                    navBarData.length !== 0 &&
                    navBarData.map((item, index) => {
                        return (
                            <li className="list-items" key={index}>
                                <Button>
                                    <Link to={`/listingPage/${item.cat_name.toLowerCase()}`}>{item?.cat_name}<KeyboardArrowRightIcon className="droper" /></Link>
                                </Button>
                            </li>
                        )
                    })
                }
                <li className="list-items">
                    <Button><Link>About</Link></Button>
                </li>

                <li className="list-items">
                    <Button><Link>Blog</Link></Button>
                </li>

                <li className="list-items">
                    <Button><Link>Pages</Link></Button>
                </li>

                <li className="list-items">
                    <Button><Link>Contact</Link></Button>
                </li>
            </ul>
        </>
    )
}
export default NavbarList;