import React ,{useState}from "react";
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import {compreIcon} from "../imagesURL/Images"

const NavigationList =()=>{
    
    const [dropDownActive, setDropDownActive] = useState(false)
    return (
        <>
          <ul className="nav-items">
                            <li className="list-inline-items">
                                <span className="font">
                                    <img src={compreIcon} alt="compre.svg" />
                                    <p>Compare</p>
                                    <span className="notify-bar">3</span>
                                </span>
                            </li>

                            <li className="list-inline-items">
                                <span className="font">
                                    <img src="https://raw.githubusercontent.com/rinkuv37/Ecommerce-Website-in-React-Js-with-Payment-Gateway/8ec2e9f2872233b520ce62eaef27d4e96268d0de/src/assets/images/icon-heart.svg" alt="wishlist.svg" />
                                    <p>Wishlist</p>
                                    <span className="notify-bar">6</span>
                                </span>
                            </li>

                            <li className="list-inline-items">
                                <span className="font">
                                    <img src="https://raw.githubusercontent.com/rinkuv37/Ecommerce-Website-in-React-Js-with-Payment-Gateway/8ec2e9f2872233b520ce62eaef27d4e96268d0de/src/assets/images/icon-cart.svg" alt="cart.svg" />
                                    <p>Cart</p>
                                    <span className="notify-bar">2</span>
                                </span>
                            </li>

                            <li className="list-inline-items">
                                <span className="font" onClick={() => setDropDownActive(!dropDownActive)}>
                                    <img src="https://raw.githubusercontent.com/rinkuv37/Ecommerce-Website-in-React-Js-with-Payment-Gateway/8ec2e9f2872233b520ce62eaef27d4e96268d0de/src/assets/images/icon-user.svg" alt="a/c.svg" />
                                    {/* <span className="notify-bar">3</span> */}
                                    <p>Account</p>
                                </span>

                                {dropDownActive !== false &&
                                    <ul className="dropDownMenu">
                                        <li><Button className="btn-icons"><PersonIcon className="user-icon" />My Account</Button></li>
                                        <li><Button className="btn-icons"><FmdGoodIcon className="track-icon" />Order Tracking</Button></li>
                                        <li><Button className="btn-icons"><SettingsIcon className="setting-icon" />Setting</Button></li>
                                        <li><Button className="btn-icons"><LogoutIcon className="signOut-icon" />Sign Out </Button></li>
                                    </ul>}
                            </li>
                        </ul>

        
        
        </>
    )
}

export default NavigationList