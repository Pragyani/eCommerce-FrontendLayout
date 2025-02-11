import React from "react";
import { Link } from "react-router-dom";
import { CardImg } from "../imagesURL/Images";

const CardData = (props) => {
    const { data } = props;

    return (
        <>
            <div className="card-data">
                {
                    data.length !== 0 &&
                    data.map((item, index) => {
                        return (
                            <Link to={`/listingPage/${item.cat_name.toLowerCase()}`} className="link" key={index}>
                                <div className="card-item">
                                    <span className="card-img">
                                        <img src={CardImg} alt="category image" width={30} />
                                    </span>
                                    <h4 className="card-h4">{item.cat_name}</h4>
                                    <span className="card-quan">30</span>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </>
    );
}
export default CardData;