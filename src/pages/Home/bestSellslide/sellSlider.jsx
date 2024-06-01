import React from "react";
import { BannerImg4 } from "../../../Components/imagesURL/Images";

const Sellslider = () => {
    return (
        <>
            <div className="list-i">
                <h2 className="home-h2">Daily Best Sells</h2>

                <ul className="list-inline">
                    <li className="tag-list">
                        <a className="List">Popular</a>
                    </li>

                    <li className="tag-list">
                        <a className="ListMilks ">Featured</a>
                    </li>

                    <li className="tag-list">
                        <a className="List">New Added</a>
                    </li>
                </ul>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-img">
                    <img src={BannerImg4} alt="" />

                </div>
            </div>
        </>
    )
}

export default Sellslider;