import React from "react";
import './Topproduct.css';


const ToProduct =()=>{
    return(
        <>
        <section className="topProductSection">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3>Top Selling</h3>
                    </div>

                    <div className="col">
                        <h3>Trending Product</h3>
                    </div>

                    <div className="col">
                        <h3>Recently Added</h3>
                    </div>

                    <div className="col">
                        <h3>Top Rated</h3>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default ToProduct;
