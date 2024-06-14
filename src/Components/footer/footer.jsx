import React from "react";
import './footer.css';
import FooterWrapper from "./footerWapper/FooterWrapper";
import FooterSection from "./foteerSection/FooterSection";
import { DailCol } from "../imagesURL/Images";

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
                    </div>
                </div>


            </div>
        </>
    )
}
export default Footer;