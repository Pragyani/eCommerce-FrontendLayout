import React from "react";
import './Topproduct.css';
import ProductContent from "./ProductContent";

const ToProduct =()=>{
    return(
        <>
        <section className="topProductSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                     <ProductContent title="Top Selling"/>
                    </div>

                    <div className="col">
                     <ProductContent title="Recently Added"/>
                    </div>

                    <div className="col">
                     <ProductContent title="Trending Products"/>
                    </div>

                    <div className="col">
                     <ProductContent title="Top Rated"/>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default ToProduct;
