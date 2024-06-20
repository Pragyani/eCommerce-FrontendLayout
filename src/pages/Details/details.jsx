import React from "react";
import './detail.css'
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const DetailPage = () => {
    return (
        <>
            <div className="detailed-page">
                <div className="contaier-fluid">
                    <div className="breadcrumb">
                        <div className="crumb-nav">
                            <ul>
                                <Link to='/'> <li>Home <KeyboardArrowRightIcon className="arrow"/></li></Link>
                                <Link to='/listingPage'><li>Vegatble & Tubers  <KeyboardArrowRightIcon className="arrow"/></li></Link>
                                <li>Seed Of Change organic  <KeyboardArrowRightIcon className="arrow"/></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailPage;