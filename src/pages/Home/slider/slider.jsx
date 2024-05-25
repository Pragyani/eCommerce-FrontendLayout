import React from "react";
import Slider from "react-slick";
import './slider.css';
import { Slid2, slider1 } from "../../../Components/imagesURL/Images";


const HomeSlider = () => {

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    return (
        <section className="homSlider">
            <div className="sliderContainer">
                <Slider {...settings} className="home_slider_main">
                    <div className="item">
                        <img src={Slid2} className="item-img" />

                        <div className="item-info">
                            <h2 className="mb-4">
                                Don't miss amazing <br />
                                grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>

                        </div>
                    </div>

                    <div className="item">
                        <img src={slider1} className="item-img" />

                        <div className="item-info">
                            <h2 className="mb-4">
                                Fresh Vegetables <br />
                                Big Discount
                            </h2>
                            <p>Save up to 50% off on your first order</p>
                        </div>

                    </div>
                </Slider>

            </div>
        </section>
    )
}

export default HomeSlider;