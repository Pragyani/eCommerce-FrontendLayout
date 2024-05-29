import React from "react";
import './product.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Product =()=>{
    return(
        <>
        <div className="productThumb">
            <div className="imgWrapper">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="ProductImages" className="p-img"/>

                <div className="overlay">
                    <ul className="list-inline">
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="info">
                <span className="based-categories">Snacks</span>
                <h4 className="tittle"><Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link> </h4>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <span className="brand">By <a  className="text"><Link> Nest Food</Link></a></span>

                <div className="info-price-Tg">
                    <div className="price-info">
                        <span className="price">$32.8</span>

                        <Button className="ad-btn">Add <ShoppingCartIcon className="cart-i"/></Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;