import React  from "react";
import './Banner.css';
import { BannerImg1 } from "../imagesURL/Images";

const Banner =()=>{
    return (
        <>
        <div className="banner-section">
            <div className="contaier-fluid">
                <div className="row">
                    <div className="banner-col">
                        <div className="box">
                            <img src={BannerImg1} alt="bannerPlate" />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Banner;