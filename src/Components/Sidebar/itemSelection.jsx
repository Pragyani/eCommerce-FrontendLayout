import React from "react";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import { Link } from "react-router-dom";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ItemSelection = () => {
    return (
        <>
            <div className="caption">
                <h5>Item Condition</h5>
                <ul>
                    <li> <Checkbox {...label} className="clr" />New (1506)</li>
                    <li> <Checkbox {...label} className="clr" />Refurbised (27)</li>
                    <li> <Checkbox {...label} className="clr" />Used (45)</li>
                </ul>
            </div>

            <div className="filterPart">
                <Link to="/listingPage">
                    <Button className="fltr"> <FilterAltSharpIcon className="fltr-icon" />Filter</Button>
                </Link>
            </div>
        </>
    )
}
export default ItemSelection;