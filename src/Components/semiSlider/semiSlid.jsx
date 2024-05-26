import React from "react";
import './semiSlide.css'
import Slider from "react-slick";
import { semiSliderImg1, semiSliderImg10, semiSliderImg2, semiSliderImg3, semiSliderImg4, semiSliderImg5, semiSliderImg6, semiSliderImg7, semiSliderImg8, semiSliderImg9 } from "../imagesURL/Images";

const SemiSlider = () => {


    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1

    };
    return (
        <>

            <div className="semiSection">
                <div className="semiContainer">
                    <h3 className="semi-heading">Featured Categories</h3>
                    <Slider {...settings} className="semi_slider_Main">

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg1} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg2} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg3} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg4} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>


                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg5} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg6} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg7} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg8} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg9} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src={semiSliderImg10} alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SemiSlider;