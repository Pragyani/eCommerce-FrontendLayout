import React from "react";
import './detail.css'
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Rating from '@mui/material/Rating';
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const DetailPage = () => {
    return (
        <>
            <div className="detailed-page">
                <div className="contaier-fluid">
                    <div className="breadcrumb">
                        <div className="crumb-nav">
                            <ul>
                                <Link to='/'> <li>Home <KeyboardArrowRightIcon className="arrow" /></li></Link>
                                <Link to='/listingPage'><li>Vegatble & Tubers  <KeyboardArrowRightIcon className="arrow" /></li></Link>
                                <li>Seed Of Change organic  <KeyboardArrowRightIcon className="arrow" /></li>
                            </ul>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-p1">
                            <div className="rows">
                                <div className="col-productZoom">
                                    <div className="productZoom">
                                        <InnerImageZoom zoomType='hover' className="imgsrc" zoomScale={2} src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg" />
                                    </div>
                                </div>

                                <div className="col-productInfo">
                                    <div className="productInfo">
                                        <h1>Seeds of Change Organic <br /> Quinoa, Brown   </h1>
                                        <div className="compreRating">
                                            <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                                            <h6>(32 review)</h6>
                                        </div>

                                        <div className="priceSec">
                                            <span className="text-g">$38</span>
                                        </div>

                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, <br /> corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum <br /> eligendi.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-p2">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailPage;