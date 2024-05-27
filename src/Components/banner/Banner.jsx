import React  from "react";
import './Banner.css';
import { BannerImg1, BannerImg2, BannerImg3 } from "../imagesURL/Images";

const Banner =()=>{
    return (
        <>
        <div className="banner-section">
            <div className="Container">
                <div className="row">
                    <div className="banner-col">
                        <div className="box">
                            <img src={BannerImg1} alt="bannerPlate" />
                        </div>
                    </div>

                    <div className="banner-col">
                        <div className="box">
                            <img src={BannerImg2} alt="bannerPlate" />
                        </div>
                    </div>

                    <div className="banner-col">
                        <div className="box">
                            <img src={BannerImg3} alt="bannerPlate" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Banner;