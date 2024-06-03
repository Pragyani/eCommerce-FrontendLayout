import React from "react";
import './HomePage.css';
import HomeSlider from "./slider/slider";
import SemiSlider from "../../Components/semiSlider/semiSlid";
import Banner from "../../Components/banner/Banner";
import Product from "../../Components/product/product";
import Sellslider from "./bestSellslide/sellSlider";
import ProductSectionlist from "./bestSellslide/productSectionlist";
import ToProduct from "./topproduct/TopProduct";
import { LetterImg } from "../../Components/imagesURL/Images";

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
            <ToProduct />


            <section className="LetterSection">
                <div className="container-fluid">
                    <div className="box">
                        <div className="info">
                            <h2>Stay home & get your daily <br/> needs from our shop</h2>
                            <p>Start your daily Shopping with Nest Mart</p>
                        </div>
                        <div className="img">
                            <img src={LetterImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
        </>
    )
}
export default Home;