import React from "react";
import './product.css';

const Product =()=>{
    return(
        <>
        <div className="productThumb">
            <div className="imgWrapper">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="ProductImages" className="p-img"/>
            </div>

            <div className="info">
                <span className="based-brand">Snacks</span>
                <h4 className="tittle">Seeds of Change Organic Quinoa, Brown, & Red Rice </h4>
            </div>
        </div>
        </>
    )
}

export default Product;