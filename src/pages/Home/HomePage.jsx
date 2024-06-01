import React from "react";
import './HomePage.css';
import HomeSlider from "./slider/slider";
import SemiSlider from "../../Components/semiSlider/semiSlid";
import Banner from "../../Components/banner/Banner";
import Product from "../../Components/product/product";

const Home = () => {
    return (
        <>
            <HomeSlider />
            <SemiSlider />
            <Banner />

            <section className="homeProduct">
                <div className="home-Container">
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

                    <div className="productrow">
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                        <div className="productItem">
                            <Product/>
                        </div>
                    </div>





                    <div className="list-i">
                        <h2 className="home-h2">Daily Best Sells</h2>

                        <ul className="list-inline">
                            <li className="tag-list">
                                <a className="List">Popular</a>
                            </li>

                            <li className="tag-list">
                                <a className="ListMilks ">Featured</a>
                            </li>

                            <li className="tag-list">
                                <a className="List">New Added</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <br /><br /><br /><br /><br />
        </>
    )
}
export default Home;