import React from "react";
import './semiSlide.css'
import Slider from "react-slick";

const SemiSlider = () => {


    var settings = {
        dots: true,
        // arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1
      
    };
    return (
        <>

            <div className="semiSection">
                <div className="semiContainer">
                    <h3 className="semi-heading">Featured Categories</h3>
                    <Slider {...settings} className="semi_slider_Main">
                               <div className="itemes">
                                
                               </div>

                               <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>

                                <div className="itemes">
                                
                                </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SemiSlider;