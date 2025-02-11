import React from "react";
import Button from '@mui/material/Button';
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';

const ItemSelection = ({ handleFilter }) => {
    return (
        <>
            <div className="filterPart">
                <Button className="fltr" onClick={handleFilter}>
                    <FilterAltSharpIcon className="fltr-icon" /> Filter
                </Button>
            </div>
        </>
    );
};

export default ItemSelection;
