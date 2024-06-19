import React from "react";
import Slider from '@mui/material/Slider';
import CardData from "./CardData";
import ItemSelection from "./itemSelection";
import SideImgDetail from "./sideImgDetail/SideDownDetail";


function valuetext(value) { return `${value}°C` };

const SideBar = () => {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <>
            <div className="slideBar">
                <div className="card">
                    <h3>Category</h3>
                    <CardData />
                </div>

                <div className="card">
                    <h3>Fill By Price</h3>
                    <Slider
                        min={0}
                        step={1}
                        max={2000}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color="success" />

                    <div className="priceRange">
                        <span>From: <strong className="txt">${[value[0]]}</strong></span>
                        <span>To: <strong className="txt">${[value[1]]}</strong></span>
                    </div>
                    <ItemSelection />
                </div>
                <SideImgDetail />
            </div>
        </>
    )
}
export default SideBar;