import React from "react";
import ImgLogo from "../images/logoImg";

const NavigationBar =()=>{
    return(
        <>
         <div className='navigation-items'>
        <img src={ImgLogo} alt='logo' />
        <p>PragyAni  Gallery</p>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
        </>
    )
}
export  default NavigationBar;