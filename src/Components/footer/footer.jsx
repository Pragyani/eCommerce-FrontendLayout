import React from "react";
import './footer.css';
import FooterWrapper from "./footerWapper/FooterWrapper";
import { Link } from "react-router-dom";
import logoImg, { AppStoreimg, GooglePlayimg, PaymentGateway } from "../imagesURL/Images";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <FooterWrapper />

                <footer>
                    <div className="footer-fluid">
                        <div className="footer-row">
                            <div className="footer-img">
                                <Link> <img src={logoImg} alt="" /></Link>
                                <p>Awesome grocery store website template</p>
                                <br />
                                <p><PlaceIcon className="footer-uicon" /><span>Address:</span> 5171 W Campbell Ave <br /> undefined Kent, Utah 53127 United States</p>
                                <p><PhoneInTalkIcon className="footer-uicon" /><span>Call Us:</span>(+91) - 540-025-124553</p>
                                <p><ScheduleSendIcon className="footer-uicon" /><span>Email:</span>sale@Nest.com</p>
                                <p><AlarmOnIcon className="footer-uicon" /><span>Hours:</span>10:00 - 18:00, Mon - Sat</p>
                            </div>

                            <div className="wid-col">
                                <h3>Company</h3>
                                <ul className="foter-wid-list">
                                    <li><Link to="#">About US</Link></li>
                                    <li><Link to="#">Delicery Info.</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Supoort Center</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                </ul>
                            </div>


                            <div className="acount-list">
                                <h3>Account</h3>
                                <ul className="foter-wid-list">
                                    <li><Link to="#">Sign in</Link></li>
                                    <li><Link to="#">View cart</Link></li>
                                    <li><Link to="#">My Wishlist</Link></li>
                                    <li><Link to="#">Track My Order</Link></li>
                                    <li><Link to="#">Help Ticket </Link></li>
                                    <li><Link to="#">Shipping Details</Link></li>
                                    <li><Link to="#">Compare Product</Link></li>
                                </ul>
                            </div>

                            <div className="acount-list">
                                <h3>Coprate</h3>
                                <ul className="foter-wid-list">
                                    <li><Link to="#">Become a Vender</Link></li>
                                    <li><Link to="#">Affiliate Program</Link></li>
                                    <li><Link to="#">Farm Business</Link></li>
                                    <li><Link to="#">Farm Careers</Link></li>
                                    <li><Link to="#">Our Suppliers</Link></li>
                                    <li><Link to="#">Accesibilty</Link></li>
                                    <li><Link to="#">Promotions</Link></li>
                                </ul>
                            </div>

                            <div className="acount-list">
                                <h3>Popular</h3>
                                <ul className="foter-wid-list">
                                    <li><Link to="#">Milks & Flavoured Milk</Link></li>
                                    <li><Link to="#">Butter & Margarine</Link></li>
                                    <li><Link to="#">Eggs Subtitutes</Link></li>
                                    <li><Link to="#">Marmalades</Link></li>
                                    <li><Link to="#">Sour Cream and Dips</Link></li>
                                    <li><Link to="#">Tea & Coffe</Link></li>
                                    <li><Link to="#">Cheese</Link></li>
                                </ul>
                            </div>

                            <div className="web-payment-details">
                                <h3>Install App</h3>
                                <p>From App Store or Google Play</p>

                                <div className="instll-app">
                                    <Link to="#"><img src={AppStoreimg} alt="" /></Link>
                                    <Link to='#'><img src={GooglePlayimg} alt="" /> </Link>
                                </div>
                                <p className="web-p"> Secured Payment Gateway</p>
                                <img src={PaymentGateway} alt="" />
                            </div>



                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Footer;