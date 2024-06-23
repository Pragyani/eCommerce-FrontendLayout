import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Button } from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProductInfo = () => {
    const [inputValue, setInputValue] = useState(0);

    const add = () => { setInputValue(inputValue + 1) }

    const subt = () => { if (inputValue !== 0) { setInputValue(inputValue - 1) } }

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
                            <input type="number" value={inputValue} />
                            <span className="arrow add" onClick={add}><KeyboardArrowUpOutlinedIcon /></span>
                            <span className="arrow subt" onClick={subt}><KeyboardArrowDownOutlinedIcon /></span>
                        </div>
                        <Button className="btn-g">Add to Cart</Button>
                        <Button className="btn-g btn-border"><FavoriteBorderOutlinedIcon /></Button>
                        <Button className="btn-g btn-border"><CompareArrowsIcon /> </Button>
                    </div>

                    <ul className="product-type">
                        <li className="pro-type">Type: <span>Organic</span></li>
                        <li className="pro-type">MFG: <span>JUN 4,2022</span></li>
                        <li className="pro-type">LIFE: <span>70 days</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ProductInfo;