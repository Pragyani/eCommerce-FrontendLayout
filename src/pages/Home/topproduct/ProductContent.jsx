import React from "react";
import { img1 } from "../../../Components/imagesURL/Images";

const ProductContent = (props) => {
    return (
        <>
            <div className="product_box">
                <h3>{props.title}</h3>

                <div className="product_contnt">
                    <div className="images">
                        <img src={img1} alt="topProductIMAGES" />
                    </div>

                    <div className="images-info">

                    </div>
                </div>

            </div>

        </>
    )
}
export default ProductContent;