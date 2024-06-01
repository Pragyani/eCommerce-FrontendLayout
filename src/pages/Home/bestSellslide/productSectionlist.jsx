import React from "react";

const ProductSectionlist =()=>{
    return(
        <>
          <div className="list-i">
                        <h2 className="home-h2">Popular Products</h2>

                        <ul className="list-inline">
                            <li className="product-list">
                                <a className="List">All</a>
                            </li>

                            <li className="product-list">
                                <a className="List">Milks and Daires</a>
                            </li>

                            <li className="product-list">
                                <a className="List">Coffes & Tea</a>
                            </li>

                            <li className="product-list">
                                <a className="List">Pet Foods</a>
                            </li>

                            <li className="product-list">
                                <a className="List">Meats</a>
                            </li>

                            <li className="product-list">
                                <a className="List">Vegetables</a>
                            </li>

                            <li className="product-list">
                                <a className="List">Fruits</a>
                            </li>
                        </ul>
                    </div>
        </>
    )
}
export default ProductSectionlist;