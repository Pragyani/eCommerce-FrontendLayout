import React, { useState } from "react";
import "../header/header.css";
import SearchIcon from '@mui/icons-material/Search';
import Selection from "../selectDrop/SelectDroper";
import logoImg from "../imagesURL/Images";
import NavigationList from "../navigationlist/NavigationList";
import Nav from "../nav/nav";

const Header = (props) => {
    const {data}=props;

    const [categories, setCategories] = useState([
        'All Categories',
        'Milks & Daires',
        'Wine & Drink',
        'Clothing & Beauty',
        'Fresh Seafood',
        'Pet Food & Toy',
        'Bakery Product',
        'Fresh Fruit',
        'vegetables',
        'Fast Food',
        'Bakery Product',
        'Fresh Fruit',
        'Vegetables',
        'Fast Food'
    ])
 

    return (
        <>
            <header>
                <div className="container-header">
                    <div className="row">
                        <div className="columns">
                            <img src={logoImg} alt="logo" />
                        </div>

                        <div className="column-sm-5">
                            <div className="headerSearch d-flex align-items-center">
                                <Selection data={categories} />
                                <div className="search">
                                    <input type="text" placeholder="Search Here For Item..." />
                                    <SearchIcon className="search-icon" />
                                </div>
                            </div>
                        </div>
                        <NavigationList/>
                    </div>
                </div>
            </header>
           <Nav data={data}/>
        </>
    )
}

export default Header