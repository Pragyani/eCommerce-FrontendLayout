import React from "react";
import { CardImg, CardImg2, CardImg3, CardImg4, CardImg5 } from "../imagesURL/Images";
import { Link } from "react-router-dom";

const CardData = (props) => {
    const { data } = props;

    return (
        <>
            <div className="card-data">
                {
                    data.length !== 0 &&
                    data.map((item, index) => {
                        console.log(item, ' cat')
                        return (
                            <Link to={`/listingPage/${item.cat_name.toLowerCase()}`} className="link">
                                <div className="card-item">
                                    <span className="card-img">
                                        <img src={CardImg} alt="cardicoimage" width={30} />  </span>
                                    <h4 className="card-h4">{item.cat_name}</h4>
                                    <span className="card-quan">30</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}
export default CardData;