import React from "react";
import './notfound.css';
import { Page404 } from "../../Components/imagesURL/Images";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const NotFound = () => {
    return (
        <>
            <section className="notfound">
                <div className="container-fluid">
                    <div className="box">
                        <img src={Page404} alt="404Page" />
                        <br /><br />
                        <h1>Page Not Found</h1>
                        <p>The link you clicked may be broken or the page may have been removed. <br />
                            visit the<Link to='./'> Homepage </Link>or Contact us about the problem</p>

                        <div className="backHome">
                            <Link to='./'> <Button className="btn-home"><HomeOutlinedIcon className="i"/>Back To Home Page<KeyboardDoubleArrowRightOutlinedIcon className="arrow"/></Button></Link>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
export default NotFound;