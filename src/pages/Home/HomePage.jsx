import React from "react";
import HomeSlider from "./slider/slider";
import SemiSlider from "../../Components/semiSlider/semiSlid";
import Banner from "../../Components/banner/Banner";

const Home = () => {
    return (
        <>
            <HomeSlider />
            <SemiSlider />
            <Banner />

          <section className="homeProduct">
            <div className="home-Container">
                <h2 className="home-h2">
                    Popular Products
                </h2>
            </div>
          </section>
            <br /><br /><br /><br /><br />
        </>
    )
}
export default Home;