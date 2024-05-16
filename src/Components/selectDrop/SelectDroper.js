import React, { useState } from "react";
import "./Selectdroper.css";
import "../header/header.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Selection = () => {

    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedItems, setSelectedItems] = useState('All Categories')

    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect)
    }

    const closeSelect = (index , value) => {
        setSelectedIndex(index)
        setIsOpenSelect(false)
        setSelectedItems(value)
    }

    return (
        <>
            <div className="selecrDropWrapper cursor position-relative">
                <span className="onSelect" onClick={openSelect}> {selectedItems} <KeyboardArrowDownIcon className="arrow" /></span>

                {isOpenSelect === true &&
                    <div className="selectDrop">
                        <div className="searchFeild">
                            <input type="text" />
                        </div>
                        <ul className="searchResults">
                            <li onClick={() => closeSelect(0, 'All Categories')} className={`${selectedIndex === 0 ? 'active' : ''}`}>All Categories</li>
                            <li onClick={() => closeSelect(1, 'Milks & Daires')} className={`${selectedIndex === 1 ? 'active' : ''}`}>Milks & Daires</li>
                            <li onClick={() => closeSelect(2, 'Wine & Drink')} className={`${selectedIndex === 2 ? 'active' : ''}`}>Wine & Drink</li>
                            <li onClick={() => closeSelect(3, 'Clothing & Beauty')} className={`${selectedIndex === 3 ? 'active' : ''}`}>Clothing & Beauty</li>
                            <li onClick={() => closeSelect(4, 'Fresh Seafood')} className={`${selectedIndex === 4 ? 'active' : ''}`}>Fresh Seafood</li>
                            <li onClick={() => closeSelect(5, 'Pet Food & Toy')} className={`${selectedIndex === 5 ? 'active' : ''}`}>Pet Food & Toy</li>
                            <li onClick={() => closeSelect(6, 'Bakery Product')} className={`${selectedIndex === 6 ? 'active' : ''}`}>Bakery Product</li>
                            <li onClick={() => closeSelect(7, 'Fresh Fruit')} className={`${selectedIndex === 7 ? 'active' : ''}`}>Fresh Fruit </li>
                            <li onClick={() => closeSelect(8, 'vegetables')} className={`${selectedIndex === 8 ? 'active' : ''}`}>Vegetables</li>
                            <li onClick={() => closeSelect(9, 'Fast Food')} className={`${selectedIndex === 9 ? 'active' : ''}`}>Fast Food</li>
                            <li onClick={() => closeSelect(10, 'Bakery Product')} className={`${selectedIndex === 10 ? 'active' : ''}`}>Bakery Product</li>
                            <li onClick={() => closeSelect(11, 'Fresh Fruit')} className={`${selectedIndex === 11 ? 'active' : ''}`}>Fresh Fruit </li>
                            <li onClick={() => closeSelect(12, 'Vegetables')} className={`${selectedIndex === 12 ? 'active' : ''}`}>Vegetables</li>
                            <li onClick={() => closeSelect(13, 'Fast Food')} className={`${selectedIndex === 13 ? 'active' : ''}`}>Fast Food</li>
                        </ul>
                    </div>}
            </div>



        </>
    )
}

export default Selection;