import React from "react";
import Slider from '@mui/material/Slider';
import CardData from "./CardData";
import ItemSelection from "./itemSelection";
import SideImgDetail from "./sideImgDetail/SideDownDetail";
import { useState } from "react";

function valuetext(value) {
    return `${value}°C`;
}

const SideBar = (props) => {
    const { data, setFilterPrice } = props; 
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFilter = () => {
        setFilterPrice(value);
    };

    return (
        <>
            <div className="slideBar">
                <div className="card">
                    <h3>Category</h3>
                    <CardData data={data} />
                </div>

                <div className="card">
                    <h3>Fill By Price</h3>
                    <Slider
                        min={0}
                        step={1}
                        max={2000}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="success"
                    />
                    <div className="priceRange">
                        <span>From: <strong className="txt">Rs.{[value[0]]}</strong></span>
                        <span>To: <strong className="txt">Rs.{[value[1]]}</strong></span>
                    </div>
                    <ItemSelection handleFilter={handleFilter} />
                </div>
                <SideImgDetail />
            </div>
        </>
    );
};
export default SideBar;