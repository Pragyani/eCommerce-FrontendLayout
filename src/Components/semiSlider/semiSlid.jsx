import React from "react";
import './semiSlide.css'
import Slider from "react-slick";

const SemiSlider = () => {


    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 200,
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
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>


                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>

                        <div className="itemes">
                            <div className="info">
                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" alt="productImg" />
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