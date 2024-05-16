import React, { useState } from "react";
import "./Selectdroper.css";
import "../header/header.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Selection = (props) => {

    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedItems, setSelectedItems] = useState('All Categories')

    const openSelect = () => {
        setIsOpenSelect(!isOpenSelect)
    }

    const closeSelect = (index, value) => {
        setSelectedIndex(index)
        setIsOpenSelect(false)
        setSelectedItems(value)
    }

    return (
        <>
            <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
                <div className="selecrDropWrapper cursor position-relative">
                    <span className="onSelect" onClick={openSelect}> {selectedItems} <KeyboardArrowDownIcon className="arrow" /></span>

                    {isOpenSelect === true &&
                        <div className="selectDrop">
                            <div className="searchFeild">
                                <input type="text" placeholder="Search items" />
                            </div>
                            <ul className="searchResults">
                                {props.data.map((items, index) => {
                                    return (
                                        <li onClick={() => closeSelect(index, items)} className={`${selectedIndex === index ? 'active' : ''}`}>{items}</li>
                                    )
                                })}
                            </ul>
                        </div>}
                </div>
            </ClickAwayListener>


        </>
    )
}

export default Selection;