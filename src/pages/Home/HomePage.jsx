import React from "react";
import './HomePage.css';
import HomeSlider from "./slider/slider";
import SemiSlider from "../../Components/semiSlider/semiSlid";
import Banner from "../../Components/banner/Banner";
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
                    <Sellslider sellproducts={products} />
                </div>
            </section>
            <ToProduct />
            <LetterSection />
        </>
    )

}
export default Home;