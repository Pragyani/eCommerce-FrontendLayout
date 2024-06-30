import React, { useState } from "react";
import './semiSlide.css'
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SemiSlider = (props) => {
    const { data } = props;

    const allData = (data);
    // console.log(allData ,'  xyz');

    const itemBg = ['#fffceb', '#ecffec', '#feefea', '#fff3eb', '#fff3ff', '#f2fce4', '#feefea', '#fffceb', '#feefea',
        '#ecffec', '#feefea', '#fff3eb', '#fff3ff', '#f2fce4', '#feefea', '#fffceb', '#feefea', '#ecffec']

    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
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
                        {
                            allData.length !== 0 &&
                            allData.map((item, index) => {
                                return (
                                    <div className="itemes" key={index}>

                                        <Link to={`/listingPage/${item?.cat_name.toLowerCase()}`}>

                                            <div className="info" style={{ background: itemBg[index] }}>

                                                <img src={item?.image} alt="productImg" width='80' />
                                                <h5>{item?.cat_name}</h5>
                                                <p>26 items</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
export default SemiSlider;