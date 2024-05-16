import React, { useState } from "react";
import "./Selectdroper.css";
import "../header/header.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Selection = () => {

    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)

    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect)
    }


    const closeSelect = (index) => {
        setSelectedIndex(index)
        setIsOpenSelect(false)
    }

    return (
        <>
            <div className="selecrDropWrapper cursor position-relative">
                <span className="onSelect" onClick={openSelect}> All Categories <KeyboardArrowDownIcon className="arrow"/></span>

                {isOpenSelect === true &&
                    <div className="selectDrop">
                        <div className="searchFeild">
                            <input type="text" />
                        </div>
                        <ul className="searchResults">
                            <li onClick={() => closeSelect(0)} className={`${selectedIndex===0 ? 'active' : ''}`}>All Categories</li>
                            <li onClick={() => closeSelect(1)} className={`${selectedIndex===1 ? 'active' : ''}`}>Milks & Daires</li>
                            <li onClick={() => closeSelect(2)} className={`${selectedIndex===2 ? 'active' : ''}`}>Wine & Drink</li>
                            <li onClick={() => closeSelect(3)} className={`${selectedIndex===3 ? 'active' : ''}`}>Clothing & Beauty</li>
                            <li onClick={() => closeSelect(4)} className={`${selectedIndex===4 ? 'active' : ''}`}>Fresh Seafood</li>
                            <li onClick={() => closeSelect(5)} className={`${selectedIndex===5 ? 'active' : ''}`}>Pet Foor & Toy</li>
                            <li onClick={() => closeSelect(6)} className={`${selectedIndex===6 ? 'active' : ''}`}>Bakery Product</li>
                            <li onClick={() => closeSelect(7)} className={`${selectedIndex===7 ? 'active' : ''}`}>Fresh Fruit </li>
                            <li onClick={() => closeSelect(8)} className={`${selectedIndex===8 ? 'active' : ''}`}>Vegetables</li>
                            <li onClick={() => closeSelect(9)} className={`${selectedIndex===9 ? 'active' : ''}`}>Fast Food</li>
                            <li onClick={() => closeSelect(10)} className={`${selectedIndex===10 ? 'active' : ''}`}>Bakery Product</li>
                            <li onClick={() => closeSelect(11)} className={`${selectedIndex===11 ? 'active' : ''}`}>Fresh Fruit </li>
                            <li onClick={() =>closeSelect(12)} className={`${selectedIndex===12 ? 'active' : ''}`}>Vegetables</li>
                            <li onClick={() => closeSelect(13)} className={`${selectedIndex===13? 'active' : ''}`}>Fast Food</li>
                        </ul>
                    </div>}
            </div>



        </>
    )
}

export default Selection;