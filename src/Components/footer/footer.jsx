import React from "react";
import './footer.css';
import FooterWrapper from "./footerWapper/FooterWrapper";
import { Link } from "react-router-dom";
import logoImg from "../imagesURL/Images";

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                   <FooterWrapper/>

                   <footer>
                    <div className="footer-fluid">
                        <div className="footer-row">
                            <div className="footer-img">
                               <Link> <img src={logoImg} alt="" /></Link>
                               <p>Awesome grocery store website template</p>
                            </div>
                        </div> 
                    </div>
                   </footer>
            </div>
        </>
    )
}
export default Footer;