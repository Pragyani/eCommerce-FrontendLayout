import React from "react";
import './listPage.css';
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const ListingPage = () => {
    return (
        <>
            <section className="listingPAge">
                <div className="container-fluid">
                    <div className="listing-header">
                        <h1>Snack</h1>
                        <ul className="list-inline">
                            <li className="list-item">
                                <Link to={'/'} className="home-fnt"> <HomeOutlinedIcon className="arro"/>Home <KeyboardArrowRightIcon className="arrow"/></Link>
                            </li>
                            <li >
                                <Link to={''}>Shop <KeyboardArrowRightIcon className="arrow"/></Link>
                            </li>
                            <li >
                                <Link to={''}>Snack <KeyboardArrowRightIcon className="arrow"/></Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ListingPage;
