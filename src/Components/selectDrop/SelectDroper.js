import React, { useState } from "react";
import "./Selectdroper.css";
import "../header/header.css";

const Selection = () => {

    const [isOpenSelect, setIsOpenSelect] = useState(false);

    const openSelect =()=>{
        setIsOpenSelect(!isOpenSelect)
    }

    return (
        <>
            <div className="selecrDropWrapper cursor position-relative">
                <span className="onSelect" onClick={openSelect}> All Categories</span>

                {isOpenSelect === true &&
                    <div className="selectDrop">
                        <div className="searchFeild">
                            <input type="text" />
                        </div>
                        <ul className="searchResults">
                            <li>Milks & Daires</li>
                            <li>Wine & Drink</li>
                            <li>Bread and Juices</li>
                            <li>Clothing & Beauty</li>
                            <li>Fresh Seafood</li>
                            <li>Pet Foor & Toy</li>
                            <li>Bakery Product</li>
                            <li>Fresh Fruit </li>
                            <li>Vegetables</li>
                            <li>Fast Food</li>
                            <li>Bakery Product</li>
                            <li>Fresh Fruit </li>
                            <li>Vegetables</li>
                            <li>Fast Food</li>
                        </ul>
                    </div>}
            </div>



        </>
    )
}

export default Selection;