import React from "react";
import './HomePage.css';
import HomeSlider from "./slider/slider";
import SemiSlider from "../../Components/semiSlider/semiSlid";
import Banner from "../../Components/banner/Banner";
import Product from "../../Components/product/product";
import Sellslider from "./bestSellslide/sellSlider";
import ProductSectionlist from "./bestSellslide/productSectionlist";

const Home = () => {
    return (
        <>
            <HomeSlider />
            <SemiSlider />
            <Banner />
            <section className="homeProduct">
                <div className="home-Container">
                    <ProductSectionlist />

                    <div className="productrow">
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                        <div className="productItem">
                            <Product />
                        </div>
                    </div>

                    <Sellslider />
                </div>
            </section>
            <br /><br /><br /><br /><br />
        </>
    )
}
export default Home;