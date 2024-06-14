import React from "react";
import './footer.css';
import FooterWrapper from "./footerWapper/FooterWrapper";
import FooterSection from "./foteerSection/FooterSection";
import { DailCol, IgIcon, TwitterIcon, fbicon } from "../imagesURL/Images";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <FooterWrapper />

                <footer>
                    <div className="footer-fluid">
                        <FooterSection />
                    </div>
                </footer>

                <hr />
                <div className="footer-bottom">
                    <div className="f-bottom">
                        <div className="footer-cr">
                            <p>© 2022, <b>Nest</b>- HTML Ecommerce Template <br />All rights reserved </p>
                        </div>

                        <div className="footer-col-dail">
                            <div className="col-i-dail">
                                <img src={DailCol} alt="dail-line" />
                                <p>1900-2386
                                    <span>Working 8:00 - 2:00</span>
                                </p>
                            </div>

                            <div className="col-ii-dail">
                                <div className="col-i-dail">
                                    <img src={DailCol} alt="dail-line" />
                                    <p>1900-2386
                                        <span>24/7 Support Center</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-social-icon">
                            <div className="social-detail">
                                <h6>Follow Us</h6>
                                <Link to="#"><img src={fbicon} alt="facebook-icon" /></Link>
                                <Link to="#"><img src={TwitterIcon} alt="facebook-icon" /></Link>
                                <Link to="#"><img src={IgIcon} alt="facebook-icon" /></Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Footer;