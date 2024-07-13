import React from "react";
import './product.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { Link, useParams, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import { useSearch } from "../context/contextApi";

const Product = (props) => {
    const { id } = useParams()

    const navigate = useNavigate()

    function gotoDetaailPage() {
        navigate('/product/details', { state: { detailData: props.item } })
    }



    return (
        <>
            <div onClick={gotoDetaailPage}>
                <div className="productThumb">
                    <span className="badge">Hot</span>
                    <div className="imgWrapper">
                        <img src={props?.item?.catImg} alt="ProductImages" className="p-img" />

                        <div className="overlay">
                            <ul className="list-inline">
                                <li className="product-list">
                                    <a className="prolist-i">
                                        <FavoriteIcon className="pro-i" />
                                    </a>
                                    <a className="prolist-i">
                                        <CompareOutlinedIcon className="pro-i" />
                                    </a>
                                    <a className="prolist-i">
                                        <RemoveRedEyeRoundedIcon className="pro-i" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="info">
                        <span className="based-categories">{props?.item?.brand}</span>
                        <h4 className="tittle"><Link>  1{props?.item?.productName.substr(0, 50) + '...'}</Link> </h4>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <span className="brand">By <a className="text"><Link>{props?.item?.brand}</Link></a></span>

                        <div className="info-price-Tg">
                            <div className="price-info">
                                <span className="price">Rs.{props?.item?.price}</span>

                                <Button className="ad-btn">Add <ShoppingCartIcon className="cart-i" /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;