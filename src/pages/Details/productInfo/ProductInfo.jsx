import React from "react";
import Rating from '@mui/material/Rating';

const ProductInfo = () => {
    return (
        <>
            <div className="col-productInfo">
                <div className="productInfo">
                    <h1>Seeds of Change Organic <br /> Quinoa, Brown   </h1>
                    <div className="compreRating">
                        <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                        <h6>(32 review)</h6>
                    </div>

                    <div className="priceSec">
                        <span className="text-g">$38</span>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, <br /> corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum <br /> eligendi.</p>

                    <div className="productSize">
                        <div className="pro-size">Size / Weight :</div>

                        <ul className="amount-list">
                            <li className="g-list">50g</li>
                            <li className="g-list">80g</li>
                            <li className="g-list">90g</li>
                            <li className="g-list">100g</li>
                            <li className="g-list">150g</li>
                        </ul>
                    </div>
                    <div className="addCartSection">
                        <div className="counterSec">
                            <input type="number" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductInfo;