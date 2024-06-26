import React, { useEffect, useState } from "react";

const ProductSectionlist = (props) => {
    const { product } = props;

    const [proData, setProData] = useState(product);
    const [catArray, setCatArray] = useState([]);
    const [activeCaTab, setActiveCaTab] = useState(1)
    const catArr = []

    useEffect(() => {
        proData.length !== 0 &&
            proData.map((item) => {
                //  console.log(item);
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        // console.log(item_)
                        // console.log(item_.cat_name)
                        catArr.push(item_.cat_name)
                    })
            })

        setCatArray(catArr);
        console.log(catArr, 'ani')
    }, [])

    return (
        <>
            <div className="list-i">
                <h2 className="home-h2">Popular Products</h2>

                <ul className="list-inline">
                    {
                        catArray.map((cat, index) => {
                            return (
                                <li className="product-list">
                                    <a className={`List ${activeCaTab === index ? 'act' : ''}`} onClick={() => { setActiveCaTab(index) }}>{cat}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default ProductSectionlist;