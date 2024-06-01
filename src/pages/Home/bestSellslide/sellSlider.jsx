import React from "react";
import { BannerImg4 } from "../../../Components/imagesURL/Images";
import Slider from "react-slick";
import Product from "../../../Components/product/product";

const Sellslider = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        fade: false
    };
    return (
        <>
            <div className="list-i">
                <h2 className="home-h2">Daily Best Sells</h2>

                <ul className="list-inline">
                    <li className="tag-list">
                        <a className="List">Popular</a>
                    </li>

                    <li className="tag-list">
                        <a className="ListMilks ">Featured</a>
                    </li>

                    <li className="tag-list">
                        <a className="List">New Added</a>
                    </li>
                </ul>
            </div>
            <br /><br /><br /><br />
            <div className="row">
                <div className="col-img">
                    <img src={BannerImg4} alt="banerimg4" />
                </div>

                <div className="sliderContainer">
                    <Slider {...settings} className="prodSlider">
                        <div className="item"><Product className="proSection" /></div>
                        <div className="item"><Product className="proSection" /></div>
                        <div className="item"><Product className="proSection" /></div>
                        <div className="item"><Product className="proSection" /></div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Sellslider;