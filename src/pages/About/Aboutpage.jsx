import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './aboutPage.css';
import { AboutPageImage, DishImage1, DishImage2, DishImage3 } from "../../Components/imagesURL/Images";

const About = () => {
    return (
        <>
            <div className="breadcrumb">
                <div className="crumb-nav">
                    <ul>
                        <Link to='/'> <li>Home <KeyboardArrowRightIcon className="arrow" /></li></Link>
                        <li>Pages<KeyboardArrowRightIcon className="arrow" /></li>
                        <li>About Us  <KeyboardArrowRightIcon className="arrow" /></li>
                    </ul>
                </div>
            </div>

            <div className="contaier">
                <div className="container-block">
                    <div className="row">
                        <div className="col-lg">
                            <img src={AboutPageImage} alt="img" />
                        </div>

                        <div className="cntn">
                            <div className="content-form">
                                <h2>Welcome to Nest</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consectetur inventore voluptate laborum commodi dicta numquam, architecto libero deleniti ea! sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                                <p>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat  legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>

                            </div>
                            <div className="contnt-picture">
                            <div className="rowes">
                                <img src={DishImage1} alt="dishIamge" />
                                <img src={DishImage2} alt="dishimg" />
                                <img src={DishImage3} alt="dishimg" />
                            </div>
                        </div>
                        </div>

                      
                    </div>
                </div>
            </div>


        </>
    )
}
export default About