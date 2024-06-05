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
            </div>
        </>
    )
}
export default Footer;