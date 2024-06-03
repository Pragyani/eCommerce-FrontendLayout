import React from "react";
import './footer.css';
import { footerIcon1, footerIcon2, footerIcon3, footerIcon4, footerIcon5 } from "../imagesURL/Images";

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                    <div className="footer-container">
                        <div className="fotter-row">
                            <div className="col">
                                 <div className="box">
                                    <span><img src={footerIcon1} /></span>
                                    <div className="info">
                                        <h4>Best Price & offers</h4>
                                        <p>Order $50 or more</p>
                                    </div>
                                 </div>
                            </div>

                            <div className="col">
                            <div className="box">
                                    <span><img src={footerIcon2}/></span>
                                    <div className="info">
                                        <h4>Free delivery</h4>
                                        <p>24/7 amazing services</p>
                                    </div>
                                 </div>
                            </div>

                            <div className="col">
                            <div className="box">
                                    <span><img src={footerIcon3}/></span>
                                    <div className="info">
                                        <h4>Great daily deal</h4>
                                        <p>When you sign up</p>
                                    </div>
                                 </div>
                            </div>

                            <div className="col">
                            <div className="box">
                                    <span><img src={footerIcon4}/></span>
                                    <div className="info">
                                        <h4>Wide assortment</h4>
                                        <p>Mega Discounts</p>
                                    </div>
                                 </div>
                            </div>

                            <div className="col">
                            <div className="box">
                                    <span><img src={footerIcon5}/></span>
                                    <div className="info">
                                        <h4> Easy returns</h4>
                                        <p>Within 30 days</p>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer;