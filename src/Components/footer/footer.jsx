import React from "react";
import './footer.css';
import FooterWrapper from "./footerWapper/FooterWrapper";
import FooterSection from "./foteerSection/FooterSection";

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

                <hr/>
                <div className="footer-bottom">
                    <div className="f-bottom">
                        <div className="footer-cr">
                            <p>© 2022, <b>Nest</b>- HTML Ecommerce Template <br />All rights reserved </p>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Footer;