import React from "react";
import { img1 } from "../../../Components/imagesURL/Images";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const ProductContent = (props) => {
    return (
        <>
            <div className="product_box">
                <h3>{props.title}</h3>

                <div className="product_contnt">
                    <div className="product-items">
                        <img src={img1} alt="topProductIMAGES" />

                        <div className="images-info">
                            <Link to=''> <h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            <div className="info-price-Tg">
                                <div className="price-info">
                                    <span className="prices">$32.8</span>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}
export default ProductContent;