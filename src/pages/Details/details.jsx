import React, { useEffect, useState } from "react";
import './detail.css'
import { Link, useLocation, useParams } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ProductInfo from "./productInfo/ProductInfo";
import ProductDescription from "./productDescription/ProductDescription";

const DetailPage = (props) => {
    const { data } = props;
    const { id } = useParams()

    const location = useLocation()

    return (
        <>
            <div className="detailed-page">
                <div className="contaier-fluid">
                    <div className="breadcrumb">
                        <div className="crumb-nav">
                            <ul>
                                <Link to='/'> <li>Home <KeyboardArrowRightIcon className="arrow" /></li></Link>
                                <Link to={'/product/details'}><li>Vegatble & Tubers  <KeyboardArrowRightIcon className="arrow" /></li></Link>
                                <li>{location?.state?.detailData?.productName}  <KeyboardArrowRightIcon className="arrow" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-p1">
                            <div className="rows">
                                <div className="col-productZoom">
                                    <div className="productZoom">
                                        <InnerImageZoom zoomType='hover' className="imgsrc" zoomScale={2} src={location?.state?.detailData?.productImages[0]} />
                                    </div>
                                </div>
                                <ProductInfo data={data} />
                            </div>
                        </div>
                    </div>
                    <ProductDescription />
                </div>
            </div>
        </>
    )
}
export default DetailPage;