import React, { useEffect, useState } from "react";
import Product from "../../../Components/product/product";
import { useSelector } from "react-redux";


const ProductSectionlist = (props) => {
    const { product } = props;

    const inputValue = useSelector((state) => state.input);
    const proData = (product);
    const [catArray, setCatArray] = useState([]);
    const [activeTab, setActiveTab] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);

    const catArr = []

    useEffect(() => {
        proData.length !== 0 &&
            proData.map((item) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catArr.push(item_.cat_name)
                    })
            })
        setCatArray(catArr);
        setActiveTab(catArr[0]);
    }, [])

    useEffect(() => {
        proData.length !== 0 &&
            proData.map((item, index) => {
                item.items.map((item_, index) => {

                    if (item_.cat_name === activeTab) {
                        setActiveTabData(item_.products)
                    }
                })
            })
    }, [activeTabData, activeTab])

    return (
        <>
            <div className="list-i">
                <h2 className="home-h2">Popular Products</h2>
                <ul className="list-inline">
                    {
                        catArray.map((cat, index) => {
                            return (
                                <li className="product-list">
                                    <a className={`List ${activeIndex === index ? 'act' : ''}`}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            setActiveTab(cat)
                                        }}>{cat}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="productrow productWrapper">
                {
                    activeTabData.length !== 0 &&
                    activeTabData.map((item, index) => {
                        if (item?.productName.toLowerCase().includes(inputValue)) {
                            return (
                                <div className="productItem" key={index}>
                                    <Product item={item} />
                                </div>
                            )
                        } else {
                            return null
                        }
                    })
                }
            </div>
        </>
    )
}
export default ProductSectionlist;