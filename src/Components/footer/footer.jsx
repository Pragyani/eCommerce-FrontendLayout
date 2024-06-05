import React from "react";
import './footer.css';
import FooterWrapper from "./footerWapper/FooterWrapper";
import { Link } from "react-router-dom";
import logoImg from "../imagesURL/Images";
import PlaceIcon from '@mui/icons-material/Place';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

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
                               <br />
                               <p><PlaceIcon className="footer-uicon" /><span>Address:</span> 5171 W Campbell Ave <br  /> undefined Kent, Utah 53127 United States</p>
                               <p><PhoneInTalkIcon className="footer-uicon" /><span>Call Us:</span>(+91) - 540-025-124553</p>
                               <p><ScheduleSendIcon className="footer-uicon" /><span>Email:</span>sale@Nest.com</p>
                               <p><AlarmOnIcon className="footer-uicon" /><span>Hours:</span>10:00 - 18:00, Mon - Sat</p>
                            </div>

                            <div className="wid-col">
                                <h3>Company</h3>
                                <ul className="foter-wid-list"></ul>
                            <li><Link to="#">About US</Link></li>
                            <li><Link to="#">Delicery Info.</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms & Conditions</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Supoort Center</Link></li>
                            <li><Link to="#">Careers</Link></li>
                            
                            </div>


                        </div> 
                    </div>
                   </footer>
            </div>
        </>
    )
}
export default Footer;