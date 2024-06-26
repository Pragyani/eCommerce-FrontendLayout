import React, { useEffect } from "react";
import './HomePage.css';
import HomeSlider from "./slider/slider";
import SemiSlider from "../../Components/semiSlider/semiSlid";
import Banner from "../../Components/banner/Banner";
import Product from "../../Components/product/product";
import Sellslider from "./bestSellslide/sellSlider";
import ProductSectionlist from "./bestSellslide/productSectionlist";
import ToProduct from "./topproduct/TopProduct";
import LetterSection from "./letterSection/LetterSection";

const Home = (props) => {

    const { products } = props;

    return (
        <>
            <HomeSlider />
            <SemiSlider />
            <Banner />
            <section className="homeProduct">
                <div className="home-Container">

                    <ProductSectionlist product={products} />

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
            <ToProduct />
            <LetterSection />
        </>
    )
}
export default Home;