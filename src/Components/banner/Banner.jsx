import React from "react";
import './Banner.css';
import { BannerImg1, BannerImg2, BannerImg3 } from "../imagesURL/Images";
import { Button } from "@mui/material";

const Banner = () => {
    return (
        <>
            <div className="banner-section">
                <div className="Container">
                    <div className="row">
                        <div className="banner-col">
                            <div className="box">
                                <img src={BannerImg1} alt="bannerPlate" />
                                <h4>Everyday Fresh & <br />
                                    Clean with Our <br />
                                    Products</h4>
                                <span className="img-btn">Shop Now</span>
                            </div>
                        </div>

                        <div className="banner-col">
                            <div className="box">
                                <img src={BannerImg2} alt="bannerPlate" />
                                <h4>Make your Breakfast <br />
                                    Healthy and Easy</h4>
                                <span className="img-btn">Shop Now</span>
                            </div>
                        </div>

                        <div className="banner-col">
                            <div className="box">
                                <img src={BannerImg3} alt="bannerPlate" />
                                <h4>The best Organic <br />
                                    Products Online</h4>
                                <span className="img-btn">Shop Now</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;