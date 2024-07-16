import React, { useEffect, useState } from "react";
import { BannerImg4 } from "../../../Components/imagesURL/Images";
import Slider from "react-slick";
import Product from "../../../Components/product/product";
import { useSelector } from "react-redux";

const Sellslider = (props) => {
    const { sellproducts } = props

    const [sellProduct, setSellProduct] = useState(sellproducts);
    const [bestSell, setBestSell] = useState([]);

    const bestSellArr = []
const inputValue = useSelector((state)=>state.input)
    useEffect(() => {
        sellProduct.length !== 0 &&
            sellProduct.map((item) => {
                if (item.cat_name === 'Electronics') {
                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.length !== 0 &&
                                item_.products.map((prodItem, index) => {
                                    bestSellArr.push(prodItem)
                                })
                        })
                }
            })
        setBestSell(bestSellArr)
    }, [])

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        fade: false
    };
    return (
        <>
            <div className="list-i">
                <h2 className="home-h2">Daily Best Sells</h2>
            </div>

            <br /><br />

            <div className="row">
                <div className="col-img">
                    <img src={BannerImg4} alt="banerimg4" />
                    <h2>Bring nature <br /> into your <br /> home</h2>
                </div>

                <div className="sliderContainer">
                    <Slider {...settings} className="prodSlider">
                        {
                            bestSell.length !== 0 &&
                            bestSell.map((item,index) => {
                                if(item?.productName.toLowerCase().includes(inputValue)){
                                    return (
                                    <div className="item"><Product className="proSection"  item={item}/></div>
                                )
                                }else{
                                    return null
                                }
                              
                            })
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Sellslider;