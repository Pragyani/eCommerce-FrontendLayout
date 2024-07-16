import React, { useEffect, useState } from "react";
import './listPage.css';
import { Link, useParams ,useLocation } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SideBar from "../../Components/Sidebar/SideBar";
import Product from "../../Components/product/product";
import { useSelector } from "react-redux";

const ListingPage = (props) => {
    const { data } = props;

    const [pdata, setPdata] = useState([]);

    const { id } = useParams();

    const itemData = [];

  const inputValue = useSelector((state)=>state.input)
    useEffect(() => {
        data.length !== 0 &&
            data.map((item) => {
                if (props.single === true) {
                    if (item.cat_name.toLowerCase() === id.toLowerCase())
                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.length !== 0 &&
                                    item_.products.map((prodItem) => {
                                        itemData.push(prodItem);
                                    })
                            })
                }
            })
        setPdata(itemData);
    }, [id])

    return (
        <>
            <section className="listingPAge">
                <div className="container-fluid">
                    <div className="listing-header">
                        <h1>E-commerce Shop  <KeyboardArrowRightIcon className="arrow" /></h1>
                        <ul className="list-inline">
                            <li className="list-item">
                                <Link to={'/'} className="home-fnt"> <HomeOutlinedIcon className="arro" />Home <KeyboardArrowRightIcon className="arrow" /></Link>
                            </li>
                            <li >
                                <Link to={''}>Shop <KeyboardArrowRightIcon className="arrow" /></Link>
                            </li>
                            <li >
                                <Link to={`/${id}`}>{id} <KeyboardArrowRightIcon className="arrow" /></Link>
                            </li>
                        </ul>
                    </div>

                    <div className="listing-data">
                        <div className="row">
                            <div className="datarow-col">
                                { data.length!==0 &&  <SideBar data={data} />}
                            </div>

                            <div className="row-col homeProduct ">
                                <div className="productrow">
                                    {
                                        pdata.length !== 0 &&
                                        pdata.map((item, index) => {
                                            if(item?.productName.toLowerCase().includes(inputValue)){
                                                return (
                                                    <div className="productItem">
                                                        <Product item={item} />
                                                    </div>
                                                )
                                            }else{
                                                return null
                                            }
                                           
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ListingPage;