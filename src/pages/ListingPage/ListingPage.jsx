import React, { useEffect } from "react";
import './listPage.css';
import { Link, useParams } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SideBar from "../../Components/Sidebar/SideBar";
import Product from "../../Components/product/product";

const ListingPage = (props) => {
    const { data } = props;
    console.log(data , ' listData');

    const { id } = useParams();

    useEffect(() => {
       data.length!==0 &&
       data.map((item,index)=>{
        if(props.single===true){
            if(item.cat_name.toLowerCase() === id.toLowerCase())
                console.log(item , ' data');
           
        }
       })
   
    }, [])


    return (
        <>
            <section className="listingPAge">
                <div className="container-fluid">
                    <div className="listing-header">
                        <h1>Snack</h1>
                        <ul className="list-inline">
                            <li className="list-item">
                                <Link to={'/'} className="home-fnt"> <HomeOutlinedIcon className="arro" />Home <KeyboardArrowRightIcon className="arrow" /></Link>
                            </li>
                            <li >
                                <Link to={''}>Shop <KeyboardArrowRightIcon className="arrow" /></Link>
                            </li>
                            <li >
                                <Link to={''}>Snack <KeyboardArrowRightIcon className="arrow" /></Link>
                            </li>
                        </ul>

                    </div>

                    <div className="listing-data">
                        <div className="row">
                            <div className="datarow-col">
                                <SideBar />
                            </div>

                            <div className="row-col homeProduct ">
                                <div className="productrow">
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
                                    <div className="productItem">
                                        <Product />
                                    </div>
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